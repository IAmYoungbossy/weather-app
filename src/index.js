import "./style.css";
import { createHeader } from "./page-header";
import { cityName, getData, getLonAndLat, getWeatherData } from "./fetch-data";
import { createfooter } from "./page-footer";
import { createMainContents } from "./page-main";
import { addListenerToButton, watchlist } from "./city-watchlist";

createHeader();
createMainContents();
createfooter();
getWeatherData(getData, getLonAndLat, cityName, false);
watchlist();
addListenerToButton();