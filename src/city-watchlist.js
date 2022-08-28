import { createDomElement } from "./create-dom-element";
import { getData, getLonAndLat, getWeatherData } from "./fetch-data";
import AddIcon from "./icons/addcity.png";

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
		descIcon = createDomElement("img");

	cityName.textContent = `${watchlistInput.value}`;
	iconAndCityName.append(descIcon, cityName);
	temp.append(` ${response.current.temp}`);
	getIconAndTemp(city, iconAndCityName, descIcon, response, temp);
	cityList.insertBefore(city, addCityButton);
}

function getIconAndTemp(city, iconAndCityName, descIcon, response, temp) {
	const watchlistInput =
		document.body.childNodes[2].childNodes[2].childNodes[1].lastChild
			.childNodes[1];
	city.append(iconAndCityName, temp);
	descIcon.src = `https://openweathermap.org/img/w/${response.current.weather[0].icon}.png`;
	watchlistInput.value = "";
}

function addListenerToButton() {
	document.addEventListener("click", addEventListenerToBtn);
}

function addEventListenerToBtn(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		headerInput = document.body.children[0].children[1].children[0],
		headerButton = document.body.children[0].children[1].children[1],
		watchlistInput = addCityButton.childNodes[1];

	if (e.target.className == "add-icon")
		watchlistInput.value.trim() === ""
			? false
			: getWeatherData(addCityToWatchlist, getLonAndLat, watchlistInput.value);

	if (e.target.className == "city") {
		const cityName = e.target.childNodes[0].childNodes[1].textContent;
		getWeatherData(getData, getLonAndLat, cityName, false);
	}

	if (e.target === headerButton)
		getWeatherData(getData, getLonAndLat, headerInput.value, headerInput);
}

export { watchlist, addListenerToButton };