import "./style.css";
import { createHeader } from "./page-header";
import {
	getCountryName,
	getLonAndLat,
	getWeatherData,
	screenLoader,
} from "./fetch-data";
import { createfooter } from "./page-footer";
import { convertBetweenUnits, createMainContents } from "./page-main";
import { watchlist } from "./city-watchlist";
import { cityName } from "./local-storage";
import {
	addListenerToButton,
	displayAvailableWatchlist,
} from "./app-click-events";
import { getData } from "./today-forecast";

createHeader();
createMainContents();
convertBetweenUnits();
createfooter();
watchlist();
screenLoader();
addListenerToButton();

displayAvailableWatchlist();
getWeatherData.call(
	document,
	getData.bind(document),
	getLonAndLat,
	cityName,
	false,
	getCountryName
);