/* eslint-disable no-use-before-define */
import { createHeader } from "./dom-elements";
import { getWeatherData } from "./fetch-data";
import "./style.css";

getWeatherData();
createHeader();