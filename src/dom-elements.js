import { createDomElement } from "./create-dom-element";

function createHeader() {
	const header = createDomElement("header");
	const searchBar = createDomElement("input", { type: "search" });
	const searchButton = createDomElement("button", { type: "button" });

  searchButton.textContent = "Search";
	header.append(searchBar, searchButton);
	document.body.append(header);
}

export { createHeader };