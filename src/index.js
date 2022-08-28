import "./style.css";
import { createHeader } from "./page-header";
import { getLonAndLat, getWeatherData } from "./fetch-data";
import { createfooter } from "./page-footer";
import { createMainContents } from "./page-main";
import { addListenerToButton, watchlist } from "./city-watchlist";

getWeatherData(getLonAndLat);
createHeader();
createMainContents();
createfooter();
watchlist();
addListenerToButton();