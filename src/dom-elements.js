import { createDomElement } from "./create-dom-element";

function createHeader() {
	const header = createDomElement("header");
	const searchDiv = createDomElement("div", { class: "search-div" });
	const searchBar = createDomElement("input", {
		type: "search",
		placeholder: "Enter City Name",
	});
	const searchButton = createDomElement("button", { type: "button" });
	const headerTitleDiv = createDomElement("div", { class: "title-div" });
	const headerTitle = createDomElement("h1");

	searchButton.textContent = "Search";
	headerTitle.textContent = "CityWatch";

	searchDiv.append(searchBar, searchButton);
	headerTitleDiv.append(headerTitle);
	header.append(headerTitleDiv, searchDiv);
	document.body.append(header);
}

export { createHeader };