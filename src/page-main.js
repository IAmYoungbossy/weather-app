import { createDomElement } from "./create-dom-element";

function createMainContents() {
	const mainDiv = createDomElement("main", { class: "main" });
	getTodayForecast(mainDiv);
	getNext7DaysForecast(mainDiv);
	getWatchlist(mainDiv);
	document.body.append(mainDiv);
}

function getTodayForecast(mainDiv) {
	const todayDataDiv = createDomElement("div", { class: "today-data-div" });
	mainDiv.append(todayDataDiv);
}

function getNext7DaysForecast(mainDiv) {
	const next7DaysDiv = createDomElement("div", { class: "next-7days-div" });
	mainDiv.append(next7DaysDiv);
}

function getWatchlist(mainDiv) {
	const watchlistDiv = createDomElement("div", { class: "watchlist-div" });
	mainDiv.append(watchlistDiv);
}

export { createMainContents };