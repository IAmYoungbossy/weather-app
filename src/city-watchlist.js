import { createDomElement } from "./create-dom-element";
import { clearScreenLoader } from "./fetch-data";
import AddIcon from "./icons/addcity.png";
import Delete from "./icons/delete.png";
import { setwatchlistArray, watchlistArray } from "./local-storage";
import { superScript } from "./page-main";

/**
 * Watchlist static elements, they do not require API request to display.
 */
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

/**
 * These are rendered when there's a request to add and display city
 * on the watchlist.
 */
function addCityToWatchlist(response) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		cityList = document.body.childNodes[2].childNodes[2].childNodes[1],
		watchlistInput = addCityButton.children[1],
		watchlistScreenLoaderDiv =
			document.body.childNodes[2].childNodes[2].lastChild,
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
	addListenerToDeleteButton(myDelete, city);

	// Removes screenloader once fetch request is successful.
	if (watchlistScreenLoaderDiv.className === "loader-container-watchlist")
		clearScreenLoader.call(document.body);
}

/**
 * Gets temperature and weather icon for each instances of city
 */
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

	// Only pushes city to localStorage if not an empty string
	if (watchlistInput.value.trim() !== "")
		watchlistArray.push(watchlistInput.value), setwatchlistArray();
	if (watchlistInput.value) watchlistInput.value = "";
}

/**
 * Add eventListener and display delete button on mouseenter, hide delete
 * button on mouseleave.
 */
function addListenerToDeleteButton(myDelete, city) {
	myDelete.addEventListener(
		"click",
		DeleteCityFromWatchlist.bind(null, myDelete)
	);
	city.addEventListener("mouseenter", () =>
		myDelete.classList.add("show-delete")
	);
	city.addEventListener("mouseleave", () =>
		myDelete.classList.remove("show-delete")
	);
}

/**
 * Deletes city from DOM and uses index of city on watchlist ul to delete
 * city name from localStorage.
 */
function DeleteCityFromWatchlist(myDelete) {
	let listArray = Array.from(document.querySelectorAll(".city"));
	let indexOfCity = listArray.indexOf(myDelete.parentNode);
	watchlistArray.splice(indexOfCity, 1);
	setwatchlistArray();
	myDelete.parentNode.parentNode.removeChild(myDelete.parentNode);
}

export { watchlist, addCityToWatchlist };