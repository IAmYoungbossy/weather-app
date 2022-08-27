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
		MyAddIcon = new Image();
	MyAddIcon.src = AddIcon;

	addCityButton.append(MyAddIcon, watchlistInput);
	watchlistHeader.textContent = "Watchlist";
	cityList.append(addCityButton);
	watchlistDiv.append(watchlistHeader, cityList);
}

export { watchlist };