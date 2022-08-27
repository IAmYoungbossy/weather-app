import { createDomElement } from "./create-dom-element";
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

function addCityToWatchlist() {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		cityList = document.body.childNodes[2].childNodes[2].childNodes[1],
		watchlistInput = addCityButton.children[1],
		city = createDomElement("li", { class: "city" });

	city.textContent = watchlistInput.value;
	cityList.insertBefore(city, addCityButton);
}

function addListenerToButton() {
	document.addEventListener("click", addEventListenerToBtn);
}

function addEventListenerToBtn(e) {
	const addCityButton =
			document.body.childNodes[2].childNodes[2].childNodes[1].lastChild,
		watchlistInput = addCityButton.children[1];
	if (e.target.className == "add-icon")
		watchlistInput.value.trim() === "" ? false : addCityToWatchlist();
}

export { watchlist, addListenerToButton };