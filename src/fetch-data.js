import { dataDisplay, minorDataReport, superScript } from "./page-main";

const cityName = "Port Harcourt";

function getWeatherData() {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1d849694bc0f4283fc1f008f1259542e`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			displayWeatherReport(response);

			const { lat } = response.coord;
			const { lon } = response.coord;
			next7DaysForecast(lat, lon);
		})
		.catch((error) => console.log(error));
}

function next7DaysForecast(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=1d849694bc0f4283fc1f008f1259542e`
	)
		.then((response) => response.json())
		.then((response) => console.log(response));
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

	const [wind, seaLevel, timeZone, date, pressure, humidity] =
		minorDataReport();

	const [regionName] = getCountryName(response);
	weatherDesc.textContent = `${response.weather[0].description}`;
	nameOfCity.textContent = `${regionName}`;

	lowTemp.append(
		"Low: ",
		convertKelvinToCelsius(response.main.temp_min),
		superScript()
	);
	highTemp.append(
		"High: ",
		convertKelvinToCelsius(response.main.temp_max),
		superScript()
	);
	temperature.append(
		`${convertKelvinToCelsius(response.main.temp)}`,
		superScript()
	);
	feelsLikeTemp.append(
		"Feels Like ",
		convertKelvinToCelsius(response.main.feels_like),
		superScript()
	);
	wind.append(`Wind Speed: ${response.wind.speed}`);
	seaLevel.append(`Sea Level: ${response.main.sea_level}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	date.append(`Current Date: ${response.dt}`);
	pressure.append(`Pressure: ${response.main.pressure}`);
	humidity.append(`Humidity: ${response.main.humidity}`);

	descIcon.src = `https://openweathermap.org/img/w/${response.weather[0].icon}.png`;
}

function getCountryName(response) {
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
	const countryName = regionNames.of(response.sys.country);
	if (countryName == response.name) return [countryName];
	else return [`${response.name}, ${countryName}.`];
}

function convertKelvinToCelsius(response) {
	return parseInt(response) - 273;
}

export { getWeatherData };