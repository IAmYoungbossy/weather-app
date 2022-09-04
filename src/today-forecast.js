import { createDomElement } from "./create-dom-element";
import {
	countryAndCityName,
	countryAndCityName2,
	getWeatherImage,
} from "./fetch-data";
import { newName, setCityName } from "./local-storage";
import { dataDisplay, minorDataReport, superScript } from "./page-main";
import { display7DaysForecast } from "./seven-days-forecast";

function getData(response, headerInput) {
	let weatherDesc = response.current.weather[0].description;
	const todayDataDiv = document.body.childNodes[2].childNodes[0],
		next7DaysDiv = document.body.childNodes[2].childNodes[1];
	clearData(todayDataDiv),
		clearData(next7DaysDiv),
		displayTodayFoecast.call(this, response),
		display7DaysForecast(response);
		
	if (headerInput.value)
		newName(headerInput.value), setCityName(), (headerInput.value = "");
	getWeatherImage(weatherDesc);
}

function clearData(div) {
	while (div.firstChild) div.removeChild(div.firstChild);
}

function displayTodayFoecast(response) {
	const lowTempSpan = createDomElement("span", { class: "convert" }),
		highTempSpan = createDomElement("span", { class: "convert" }),
		feelsLikeSpan = createDomElement("span", { class: "convert" }),
		temperatureSpan = createDomElement("span", { class: "convert" });

	// Destructuring values from returned arrays from functions
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

	if (this === document) nameOfCity.textContent = countryAndCityName;
	else nameOfCity.textContent = countryAndCityName2;
	weatherDesc.textContent = `${response.current.weather[0].description}`;
	lowTempSpan.textContent = `${parseInt(response.daily[0].temp.min)}`;
	feelsLikeSpan.textContent = `${parseInt(response.current.feels_like)}`;
	highTempSpan.textContent = `${parseInt(response.daily[0].temp.max)}`;
	temperatureSpan.textContent = `${parseInt(response.current.temp)}`;

	lowTemp.append("Low: ", lowTempSpan, superScript());
	highTemp.append("High: ", highTempSpan, superScript());
	temperature.append(temperatureSpan, superScript());
	feelsLikeTemp.append("Feels Like ", feelsLikeSpan, superScript());
	wind.append(`Wind Speed: ${response.current.wind_speed}m/s`);
	dewPoint.append(`Dew Point: ${response.current.dew_point}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	uvIndex.append(`UV Index: ${response.current.uvi}`);
	pressure.append(`Pressure: ${response.current.pressure}hPa`);
	humidity.append(`Humidity: ${response.current.humidity}%`);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
}

export { getData };