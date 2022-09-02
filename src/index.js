import "./style.css";
import { createHeader } from "./page-header";
import {
	getCountryName,
	getData,
	getLonAndLat,
	getWeatherData,
	screenLoader,
} from "./fetch-data";
import { createfooter } from "./page-footer";
import { convertBetweenUnits, createMainContents } from "./page-main";
import {
	addListenerToButton,
	displayAvailableWatchlist,
	watchlist,
} from "./city-watchlist";
import { cityName } from "./local-storage";

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