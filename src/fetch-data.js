import { API_TOKEN } from "./config";
import { createDomElement } from "./create-dom-element";
import { degree } from "./local-storage";

let unit, countryAndCityName, countryAndCityName2;

function getWeatherData(
	callback1,
	callback2,
	cityName,
	headerInput,
	callback3
) {
	checkPreferredUnit.bind(this);
	const exclude = `&units=${unit}&APPID=${API_TOKEN.KEY}`;
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}${exclude}`,
		{
			mode: "cors",
		}
	)
		.then((response) => response.json())
		.then((response) => {
			if (response.cod == 404) {
				displayErrorMessage.call(this, "City Not Found");
				clearScreenLoader.call(this);
			} else if (response.cod == 200) {
				const { lat } = response.coord;
				const { lon } = response.coord;
				callback3.call(this, response);
				callback2(lat, lon, callback1, headerInput);
			}
		})
		.catch(() => {
			clearScreenLoader.call(this);
			displayErrorMessage.call(this, "Slow Network Response, Reload Page.");
		});
}

function checkPreferredUnit() {
	if (degree == "C") unit = "metric";
	else unit = "imperial";
}

function displayErrorMessage(errorPlaceholder) {
	const watchlistInput =
			document.body.children[1].children[2].children[1].lastChild.children[1],
		headerInput = document.body.children[0].children[1].children[0];
	if (this === document.body)
		watchlistInput.classList.add("not-found"),
			setPlaceholder.call(this, watchlistInput, "Add City", errorPlaceholder);
	else
		headerInput.classList.add("not-found"),
			setPlaceholder.call(
				this,
				headerInput,
				"Enter City Name",
				errorPlaceholder
			);
}

function setPlaceholder(input, placeholder, errorPlaceholder) {
	input.value = "";
	input.setAttribute("placeholder", errorPlaceholder);
	setTimeout(() => {
		input.classList.remove("not-found");
		input.setAttribute("placeholder", placeholder);
	}, 4000);
}

function getLonAndLat(lat, lon, callback, headerInput) {
	next7DaysForecast(lat, lon, callback, headerInput);
}

function next7DaysForecast(lat, lon, callback, headerInput) {
	checkPreferredUnit();
	const exclude2 = `&exclude=minutely,hourly,alerts&units=${unit}&appid=${API_TOKEN.KEY}`;
	fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${exclude2}`
	)
		.then((response) => response.json())
		.then((response) => callback(response, headerInput));
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
		const [loaderContainer] = createScreenLoader(
			"loader-watchlist",
			"loader-container-watchlist"
		);
		document.body.childNodes[2].childNodes[2].append(loaderContainer);
	} else {
		const [loaderContainer] = createScreenLoader("loader", "loader-container");
		document.body.append(loaderContainer);
	}
}

function clearScreenLoader() {
	if (this === document.body)
		document.body.childNodes[2].childNodes[2].removeChild(
			document.body.childNodes[2].childNodes[2].lastChild
		);
	else if (document.querySelector(".loader-container"))
		document.body.lastChild.parentNode.removeChild(document.body.lastChild);
}

function createScreenLoader(loaderClass, loaderDivClass) {
	const loaderContainer = createDomElement("div", {
		class: loaderDivClass,
	});
	const loader = createDomElement("div", { class: loaderClass });
	loaderContainer.append(loader);
	return [loaderContainer];
}

function getWeatherImage(weatherDesc) {
	fetch(
		`https://api.unsplash.com/search/photos?query=${weatherDesc}&per_page=2&client_id=${API_TOKEN.UNSPLASH_ACCESS_KEY2}`,
		{ mode: "cors" }
	)
		.then((response) => response.json())
		.then(
			(response) =>
				(document.body.children[1].children[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${response.results[1].urls.raw})`)
		);
}

export {
	countryAndCityName,
	countryAndCityName2,
	getWeatherData,
	getLonAndLat,
	getCountryName,
	screenLoader,
	clearScreenLoader,
	displayErrorMessage,
	getWeatherImage,
};