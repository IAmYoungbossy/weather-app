/* eslint-disable no-use-before-define */
import { createHeader } from "./header";
import { getWeatherData } from "./fetch-data";
import "./style.css";
import { createfooter } from "./page-footer";

getWeatherData();
createHeader();
createfooter();