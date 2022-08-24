import "./style.css";
import { createHeader } from "./page-header";
import { getWeatherData } from "./fetch-data";
import { createfooter } from "./page-footer";

getWeatherData();
createHeader();
createfooter();