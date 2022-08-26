import { dataDisplay, minorDataReport, superScript } from "./page-main";
import { createForecastCard } from "./seven-days-forecast";

let countryAndCityName;
const cityName = "Port Harcourt";
const API = "20f7632ffc2c022654e4093c6947b4f4";

function getWeatherData() {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API}`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			const { lat } = response.coord;
			const { lon } = response.coord;
			getCountryName(response);
			next7DaysForecast(lat, lon);
		})
		.catch((error) => console.log(error));
}

function next7DaysForecast(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API}`
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response.daily);
			displayWeatherReport(response);
			display7DaysForecast(response);
		});
}

function display7DaysForecast(response) {
	for (let i = 1; i < response.daily.length; i++)
		createForecastCard(response.daily[i]);
}

function displayWeatherReport(response) {
	const [
		weatherDesc,
		descIcon,
		nameOfCity,
		temperature,
		lowTemp,
		highTemp,
		feelsLikeTemp,
	] = dataDisplay();

	const [wind, dewPoint, timeZone, uvIndex, pressure, humidity] =
		minorDataReport();

	nameOfCity.textContent = countryAndCityName;
	weatherDesc.textContent = `${response.current.weather[0].description}`;
	lowTemp.append("Low: ", parseInt(response.daily[0].temp.min), superScript());
	highTemp.append(
		"High: ",
		parseInt(response.daily[0].temp.max),
		superScript()
	);
	temperature.append(parseInt(response.current.temp), superScript());
	feelsLikeTemp.append(
		"Feels Like ",
		parseInt(response.current.feels_like),
		superScript()
	);
	wind.append(`Wind Speed: ${response.current.wind_speed}`);
	dewPoint.append(`Dew Point: ${response.current.dew_point}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	uvIndex.append(`UV Index: ${response.current.uvi}`);
	pressure.append(`Pressure: ${response.current.pressure}`);
	humidity.append(`Humidity: ${response.current.humidity}`);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
}

function getCountryName(response) {
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
	const countryName = regionNames.of(response.sys.country);
	if (countryName == response.name) countryAndCityName = countryName;
	else countryAndCityName = `${response.name}, ${countryName}.`;
}

export { getWeatherData };
