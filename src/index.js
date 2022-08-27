import "./style.css";
import { createHeader } from "./page-header";
import { getWeatherData } from "./fetch-data";
import { createfooter } from "./page-footer";
import { createMainContents } from "./page-main";
import { addListenerToButton, watchlist } from "./city-watchlist";

getWeatherData();
createHeader();
createMainContents();
createfooter();
watchlist();
addListenerToButton();