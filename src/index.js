import "./style.css";
import { createHeader } from "./page-header";
import { getData, getLonAndLat, getWeatherData } from "./fetch-data";
import { createfooter } from "./page-footer";
import { createMainContents } from "./page-main";
import {
	addListenerToButton,
	displayAvailableWatchlist,
	watchlist,
} from "./city-watchlist";
import { cityName } from "./local-storage";

createHeader();
createMainContents();
createfooter();
displayAvailableWatchlist();
getWeatherData(getData, getLonAndLat, `${cityName}`, false);
watchlist();
addListenerToButton();