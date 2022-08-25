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

			const [
				weatherDesc,
				descIcon,
				nameOfCity,
				temperature,
				lowTemp,
				highTemp,
				feelsLikeTemp,
			] = dataDisplay();

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
				superScript(),
				descIcon
			);
			feelsLikeTemp.append(
				"Feels Like ",
				convertKelvinToCelsius(response.main.feels_like),
				superScript()
			);

			descIcon.src = `https://openweathermap.org/img/w/${response.weather[0].icon}.png`;

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

function getCountryName(response) {
	const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
	const countryName = regionNames.of(response.sys.country);
	if (countryName == response.name) return [countryName];
	else return [`${response.name}, ${countryName}.`];
}

function convertKelvinToCelsius(response) {
	return parseInt(response) - 273;
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
	const temperature = createDomElement("p", { class: "temperature" });

	tempRange.append(lowTemp, highTemp);
	tempDiv.append(tempRange, temperature, feelsLikeTemp);
	todayDataDiv.append(weatherDesc, nameOfCity, tempDiv);

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
