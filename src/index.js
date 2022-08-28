import "./style.css";
import { createHeader } from "./page-header";
import { getData, getLonAndLat, getWeatherData } from "./fetch-data";
import { createfooter } from "./page-footer";
import { createMainContents } from "./page-main";
import { addListenerToButton, watchlist } from "./city-watchlist";

getWeatherData(getData, getLonAndLat);
createHeader();
createMainContents();
createfooter();
watchlist();
addListenerToButton();