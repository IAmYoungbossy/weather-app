import { dataDisplay, minorDataReport, superScript } from "./page-main";
import { createForecastCard } from "./seven-days-forecast";
import { API_TOKEN } from "./config";
import { createDomElement } from "./create-dom-element";
import { newName, setCityName } from "./local-storage";

let countryAndCityName, countryAndCityName2;
const exclude = `&units=metric&APPID=${API_TOKEN.KEY2}`,
	exclude2 = `&exclude=minutely,hourly,alerts&units=metric&appid=${API_TOKEN.KEY2}`;

function getWeatherData(func, cb, cityName, headerInput, getName) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}${exclude}`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			if (response.cod == 404) {
				displayCityNotFound.call(this);
				clearScreenLoader.call(this);
			} else if (response.cod == 200) {
				const { lat } = response.coord;
				const { lon } = response.coord;
				getName.call(this, response);
				cb(lat, lon, func, headerInput);
			}
		})
		.catch((error) => console.log(error));
}

function getLonAndLat(lat, lon, callback, headerInput) {
	next7DaysForecast(lat, lon, callback, headerInput);
}

function next7DaysForecast(lat, lon, callback, headerInput) {
	fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${exclude2}`
	)
		.then((response) => response.json())
		.then((response) => {
			callback(response, headerInput);
		});
}

function getData(response, headerInput) {
	let weatherDesc = response.current.weather[0].description;
	const todayDataDiv = document.body.childNodes[2].childNodes[0],
		next7DaysDiv = document.body.childNodes[2].childNodes[1];
	clearData(todayDataDiv),
		clearData(next7DaysDiv),
		displayWeatherReport.call(this, response),
		display7DaysForecast(response);
	if (headerInput.value)
		newName(headerInput.value), setCityName(), (headerInput.value = "");
	getWeatherImage(weatherDesc);
}

function clearData(div) {
	while (div.firstChild) div.removeChild(div.firstChild);
}

function display7DaysForecast(response) {
	for (let i = 1; i < response.daily.length; i++)
		createForecastCard(response.daily[i]);
	clearScreenLoader();
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

	if (this === document) nameOfCity.textContent = countryAndCityName;
	else nameOfCity.textContent = countryAndCityName2;
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
	if (this === document) {
		if (countryName == response.name) countryAndCityName = countryName;
		else countryAndCityName = `${response.name}, ${countryName}.`;
	} else {
		if (countryName == response.name) countryAndCityName2 = countryName;
		else countryAndCityName2 = `${response.name}, ${countryName}.`;
	}
}

function screenLoader() {
	if (this === document) {
		const [loaderContainer] = createLoader(
			"loader-watchlist",
			"loader-container-watchlist"
		);
		document.body.childNodes[2].childNodes[2].append(loaderContainer);
	} else {
		const [loaderContainer] = createLoader("loader", "loader-container");
		document.body.append(loaderContainer);
	}
}

function clearScreenLoader() {
	if (this === document.body)
		document.body.childNodes[2].childNodes[2].removeChild(
			document.body.childNodes[2].childNodes[2].lastChild
		);
	else document.body.lastChild.parentNode.removeChild(document.body.lastChild);
}

function createLoader(loaderClass, loaderDivClass) {
	const loaderContainer = createDomElement("div", {
		class: loaderDivClass,
	});
	const loader = createDomElement("div", { class: loaderClass });
	loaderContainer.append(loader);
	return [loaderContainer];
}

function getWeatherImage(weatherDesc) {
	fetch(
		`https://api.unsplash.com/search/photos?query=${weatherDesc}&per_page=2&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			document.body.children[1].children[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${response.results[1].urls.raw})`;
		});
}

function displayCityNotFound() {
	const watchlistInput =
			document.body.children[1].children[2].children[1].lastChild.children[1],
		headerInput = document.body.children[0].children[1].children[0];
	if (this === document.body)
		setPlaceholder.call(this, watchlistInput, "Add City");
	else setPlaceholder.call(this, headerInput, "Enter City Name");
}

function setPlaceholder(input, placeholder) {
	input.value = "";
	input.setAttribute("placeholder", "City Not Found");
	setTimeout(() => {
		input.setAttribute("placeholder", placeholder);
	}, 2500);
}

export {
	getWeatherData,
	getLonAndLat,
	getData,
	getCountryName,
	screenLoader,
	clearScreenLoader,
};