import { createDomElement } from "./create-dom-element";
import {
	clearScreenLoader,
	displayCityNotFound,
	getCountryName,
	getData,
	getLonAndLat,
	getWeatherData,
	screenLoader,
} from "./fetch-data";
import AddIcon from "./icons/addcity.png";
import Delete from "./icons/delete.png";
import { setwatchlistArray, watchlistArray } from "./local-storage";
import { superScript } from "./page-main";

// Watchlist static elements
function watchlist() {
	const watchlistDiv = document.body.childNodes[2].childNodes[2],
		watchlistHeader = createDomElement("h2"),
		cityList = createDomElement("ul"),
		addCityButton = createDomElement("li", { class: "add-button" }),
		watchlistInput = createDomElement("input", {
			class: "watchlist-input",
			type: "search",
			placeholder: "Add City",
		}),
		MyAddIcon = createDomElement("img", { class: "add-icon", src: AddIcon });

	addCityButton.append(MyAddIcon, watchlistInput);
	watchlistHeader.textContent = "Watchlist";
	cityList.append(addCityButton);
	watchlistDiv.append(watchlistHeader, cityList);
}

function addCityToWatchlist(response) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		cityList = document.body.childNodes[2].childNodes[2].childNodes[1],
		watchlistInput = addCityButton.children[1],
		iconAndCityName = createDomElement("div"),
		city = createDomElement("li", { class: "city" }),
		tempSpan = createDomElement("span", { class: "convert" }),
		temp = createDomElement("p"),
		cityName = createDomElement("p"),
		descIcon = createDomElement("img"),
		myDelete = createDomElement("img", { class: "delete", src: Delete });

	tempSpan.textContent = `${parseInt(response.current.temp)}`;
	cityName.textContent = `${watchlistInput.value}`;
	if (this === document.body) iconAndCityName.append(descIcon, cityName);
	else iconAndCityName.append(descIcon, this);

	temp.append(tempSpan, superScript());
	getIconAndTemp(city, iconAndCityName, descIcon, response, temp, myDelete);
	cityList.insertBefore(city, addCityButton);
	addEventListenerToCity(myDelete, city);
	if (
		document.body.childNodes[2].childNodes[2].lastChild.className ===
		"loader-container-watchlist"
	)
		clearScreenLoader.call(document.body);
}

function addEventListenerToCity(myDelete, city) {
	myDelete.addEventListener("click", () => {
		let listArray = Array.from(document.querySelectorAll(".city"));
		let indexOfCity = listArray.indexOf(myDelete.parentNode);
		watchlistArray.splice(indexOfCity, 1);
		setwatchlistArray();
		myDelete.parentNode.parentNode.removeChild(myDelete.parentNode);
	});
	city.addEventListener("mouseenter", () =>
		myDelete.classList.add("show-delete")
	);
	city.addEventListener("mouseleave", () =>
		myDelete.classList.remove("show-delete")
	);
}

function getIconAndTemp(
	city,
	iconAndCityName,
	descIcon,
	response,
	temp,
	myDelete
) {
	const watchlistInput =
		document.body.childNodes[2].childNodes[2].childNodes[1].lastChild
			.childNodes[1];
	city.append(iconAndCityName, temp, myDelete);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
	if (watchlistInput.value.trim() !== "")
		watchlistArray.push(watchlistInput.value), setwatchlistArray();
	if (watchlistInput.value) watchlistInput.value = "";
}

function addListenerToButton() {
	document.addEventListener("click", addEventListeners);
}

function addEventListeners(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		headerInput = document.body.children[0].children[1].children[0],
		headerButton = document.body.children[0].children[1].children[1],
		watchlistInput = addCityButton.childNodes[1],
		numberOfCities =
			document.body.children[1].children[2].children[1].childElementCount;

	if (e.target.className == "add-icon") {
		if (watchlistInput.value.trim() === "") {
			displayCityNotFound.call(document.body, "Empty Input");
			return;
		}
		if (numberOfCities == 7) {
			displayCityNotFound.call(document.body, "Max. Cities Reached");
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
			displayCityNotFound.call(null, "Empty Input");
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
	watchlist,
	addListenerToButton,
	addCityToWatchlist,
	displayAvailableWatchlist,
};
