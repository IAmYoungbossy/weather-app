import { createDomElement } from "./create-dom-element";
import {
	getCountryName,
	getData,
	getLonAndLat,
	getWeatherData,
} from "./fetch-data";
import AddIcon from "./icons/addcity.png";
import Delete from "./icons/delete.png";
import {
	newName,
	setCityName,
	setwatchlistArray,
	watchlistArray,
} from "./local-storage";

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
		temp = createDomElement("p"),
		cityName = createDomElement("p"),
		descIcon = createDomElement("img"),
		myDelete = createDomElement("img", { class: "delete", src: Delete });

	cityName.textContent = `${watchlistInput.value}`;
	if (this === document) iconAndCityName.append(descIcon, cityName);
	else iconAndCityName.append(descIcon, this);

	temp.append(` ${response.current.temp}`);
	getIconAndTemp(city, iconAndCityName, descIcon, response, temp, myDelete);
	cityList.insertBefore(city, addCityButton);
	addEventListenerToCity(myDelete, city);
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
	watchlistInput.value = "";
}

function addListenerToButton() {
	document.addEventListener("click", addEventListeners);
}

function addEventListeners(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		headerInput = document.body.children[0].children[1].children[0],
		headerButton = document.body.children[0].children[1].children[1],
		watchlistInput = addCityButton.childNodes[1];

	if (e.target.className == "add-icon")
		watchlistInput.value.trim() === ""
			? false
			: watchlistArray.push(watchlistInput.value),
			setwatchlistArray(),
			getWeatherData.apply(document.body, [
				addCityToWatchlist.bind(document),
				getLonAndLat,
				watchlistInput.value,
				false,
				getCountryName
			]);

	document.querySelectorAll(".city").forEach((cityList) => {
		if (
			e.target == cityList ||
			e.target == cityList.children[0] ||
			e.target == cityList.children[1] ||
			e.target == cityList.children[0].children[1] ||
			e.target == cityList.children[0].children[0]
		) {
			const city = cityList.childNodes[0].childNodes[1].textContent;
			getWeatherData(getData, getLonAndLat, city, false, getCountryName);
		}
	});

	if (e.target === headerButton) {
		newName(headerInput.value);
		setCityName();
		getWeatherData(
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
