import { createDomElement } from "./create-dom-element";

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

	const [
		wind,
		seaLevel,
		groundLevel,
		timeZone,
		date,
		pressure,
		humidity,
		sunriseSunset,
	] = minorDataReport();

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
	groundLevel.append(`Ground Level: ${response.main.grnd_level}`);
	timeZone.append(`time Zone: ${response.timezone}`);
	date.append(`Current Date: ${response.dt}`);
	pressure.append(`Pressure: ${response.main.pressure}`);
	humidity.append(`Humidity: ${response.main.humidity}`);
	sunriseSunset.append(`Sunset/Sunrise: ${response.sys.sunrise}/${response.sys.sunset}`);

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

function minorDataReport() {
	const minorDataDiv = document.body.childNodes[2].childNodes[0].childNodes[3];
	const windDiv = createDomElement("div", { class: "wind-div" });
	const wind = createDomElement("p", { class: "wind" });
	const seaLevelDiv = createDomElement("div", { class: "sea-level-div" });
	const seaLevel = createDomElement("p", { class: "sea-level" });
	const groundLevelDiv = createDomElement("div", { class: "ground-level-div" });
	const groundLevel = createDomElement("p", { class: "ground-level" });
	const timeZoneDiv = createDomElement("div", { class: "time-zone-div" });
	const timeZone = createDomElement("p", { class: "time-zone" });
	const dateDiv = createDomElement("div", {
		class: "date-div",
	});
	const date = createDomElement("p", { class: "date" });
	const pressureDiv = createDomElement("div", { class: "pressure-div" });
	const pressure = createDomElement("p", { class: "pressure" });
	const humidityDiv = createDomElement("div", { class: "humidity-div" });
	const humidity = createDomElement("p", { class: "humidity" });
	const sunriseSunsetDiv = createDomElement("p", {
		class: "sunrise-sunset-div",
	});
	const sunriseSunset = createDomElement("p", { class: "sunrise-sunset" });

	windDiv.append(wind);
	seaLevelDiv.append(seaLevel);
	groundLevelDiv.append(groundLevel);
	timeZoneDiv.append(timeZone);
	dateDiv.append(date);
	pressureDiv.append(pressure);
	humidityDiv.append(humidity);
	sunriseSunsetDiv.append(sunriseSunset);
	minorDataDiv.append(
		windDiv,
		seaLevelDiv,
		groundLevelDiv,
		timeZoneDiv,
		dateDiv,
		pressureDiv,
		humidityDiv,
		sunriseSunsetDiv
	);

	return [
		wind,
		seaLevel,
		groundLevel,
		timeZone,
		date,
		pressure,
		humidity,
		sunriseSunset,
	];
}

function superScript() {
	const supScript = createDomElement("sup", { class: "super-script" });
	const supScript2 = createDomElement("sup", { class: "super-script" });
	supScript.textContent = "o";
	supScript2.append(supScript, "C");
	return supScript2;
}

function dataDisplay() {
	const todayDataDiv = document.body.childNodes[2].childNodes[0];
	const weatherDesc = createDomElement("p", { class: "weather-desc" });
	const nameOfCity = createDomElement("h2", { class: "name-of-city" });
	const descIcon = createDomElement("img", { class: "desc-icon" });
	const tempDiv = createDomElement("div", { class: "temp-div" });
	const tempRange = createDomElement("div", { class: "temp-range" });
	const highTemp = createDomElement("p", { class: "high-temp" });
	const lowTemp = createDomElement("p", { class: "low-temp" });
	const feelsLikeTemp = createDomElement("p", { class: "feels-like-temp" });
	const temperatureDiv = createDomElement("div", { class: "temperature-div" });
	const temperature = createDomElement("p", { class: "temperature" });
	const minorDataDiv = createDomElement("div", { class: "minor-data-div" });

	tempRange.append(lowTemp, highTemp);
	temperatureDiv.append(temperature, descIcon);
	tempDiv.append(tempRange, temperatureDiv, feelsLikeTemp);
	todayDataDiv.append(weatherDesc, nameOfCity, tempDiv, minorDataDiv);

	return [
		weatherDesc,
		descIcon,
		nameOfCity,
		temperature,
		lowTemp,
		highTemp,
		feelsLikeTemp,
	];
}

export { getWeatherData };
