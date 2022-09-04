import { addCityToWatchlist } from "./city-watchlist";
import {
	displayErrorMessage,
	getCountryName,
	getLonAndLat,
	getWeatherData,
	screenLoader,
} from "./fetch-data";
import { degree, newDegree, setDegree, watchlistArray } from "./local-storage";
import { getData } from "./today-forecast";

function addListenerToButton() {
	document.addEventListener("click", checkEventTargets);
}

function checkEventTargets(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		headerInput = document.body.children[0].children[1].children[0],
		headerButton = document.body.children[0].children[1].children[1],
		watchlistInput = addCityButton.childNodes[1],
		numberOfCities =
			document.body.children[1].children[2].children[1].childElementCount;

	if (e.target.className == "add-icon") {
		if (watchlistInput.value.trim() === "") {
			displayErrorMessage.call(document.body, "Empty Input");
			return;
		}
		if (numberOfCities == 7) {
			displayErrorMessage.call(document.body, "Max. Cities Reached");
			return;
		} else {
			screenLoader.call(document);
			getWeatherData.apply(document.body, [
				addCityToWatchlist.bind(document.body),
				getLonAndLat,
				watchlistInput.value,
				false,
				getCountryName,
			]);
		}
	}

	// Targets all children of city element
	document.querySelectorAll(".city").forEach((cityList) => {
		if (
			e.target == cityList ||
			e.target == cityList.children[0] ||
			e.target == cityList.children[1] ||
			e.target == cityList.children[0].children[1] ||
			e.target == cityList.children[0].children[0]
		) {
			screenLoader();
			const city = cityList.childNodes[0].childNodes[1].textContent;
			getWeatherData(getData, getLonAndLat, city, false, getCountryName);
		}
	});

	if (e.target === headerButton) {
		if (headerInput.value.trim() === "") {
			displayErrorMessage.call(null, "Empty Input");
			return;
		}
		screenLoader();
		getWeatherData.call(
			null,
			getData,
			getLonAndLat,
			headerInput.value,
			headerInput,
			getCountryName
		);
	}
}

function addListenerForEventTo(element, unit) {
	element.addEventListener("click", () => {
		if (degree == "C") unit.textContent = "C";
		else unit.textContent = "F";
	});
}

function listenToEventFrom(element, unit) {
	element.addEventListener("click", () => {
		if (degree == "C")
			newDegree("F"),
				setDegree(),
				(unit.textContent = " C"),
				displayFahrenheit();
		else
			newDegree("C"), setDegree(), (unit.textContent = " F"), displayCelsius();
	});
}

function displayFahrenheit() {
	document.querySelectorAll(".convert").forEach((temp) => {
		temp.textContent = convertCelsiusToFahrenheit(parseFloat(temp.textContent));
	});
}

function convertCelsiusToFahrenheit(celsius) {
	const fahrenheit = (celsius * 9) / 5 + 32;
	return Math.round((fahrenheit * 1000) / 1000);
}

function displayCelsius() {
	document.querySelectorAll(".convert").forEach((temp) => {
		temp.textContent = convertFahrenheitToCelsius(parseFloat(temp.textContent));
	});
}

function convertFahrenheitToCelsius(fahrenheit) {
	const celsius = ((fahrenheit - 32) * 5) / 9;
	return Math.round((celsius * 1000) / 1000);
}

/**
 * Use delayExecution and displayAvailableWatchlist functions to make
 * watchlist cities in localStorage fetch their data one after the other
 * so they are being rendered accordingly as it is in LS to make deleting
 * them with ul index correspond to index in LS. Still not 100% certain to
 * fetch synchronously but helps.
 */
function delayExecution(city) {
	const fetchNow = getWeatherData(
		addCityToWatchlist.bind(city),
		getLonAndLat,
		city,
		false,
		getCountryName
	);
	return new Promise((resolve) => {
		setTimeout(() => resolve(fetchNow), 1200);
	});
}

async function displayAvailableWatchlist() {
	if (watchlistArray.length > 0)
		for (const city of watchlistArray) {
			await delayExecution(city);
		}
}

export {
	addListenerToButton,
	displayAvailableWatchlist,
	addListenerForEventTo,
	listenToEventFrom,
};