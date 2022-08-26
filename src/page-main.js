import { createDomElement } from "./create-dom-element";
import Date from "./icons/date.png";
import Humidity from "./icons/humidity.png";
import Pressure from "./icons/pressure.png";
import Timezone from "./icons/timezone.png";
import Wind from "./icons/wind.png";
import SeaLevel from "./icons/sealevel.png";

function createMainContents() {
	const mainDiv = createDomElement("main", { class: "main" });
	getTodayForecast(mainDiv);
	getNext7DaysForecast(mainDiv);
	getWatchlist(mainDiv);
	document.body.append(mainDiv);
}

function getTodayForecast(mainDiv) {
	const todayDataDiv = createDomElement("div", { class: "today-data-div" });
	mainDiv.append(todayDataDiv);
}

function getNext7DaysForecast(mainDiv) {
	const next7DaysDiv = createDomElement("div", { class: "next-7days-div" });
	mainDiv.append(next7DaysDiv);
}

function getWatchlist(mainDiv) {
	const watchlistDiv = createDomElement("div", { class: "watchlist-div" });
	mainDiv.append(watchlistDiv);
}

function minorDataReport() {
	const minorDataDiv = document.body.childNodes[2].childNodes[0].childNodes[3];
	const windDiv = createDomElement("div", { class: "wind-div" });
	const wind = createDomElement("p", { class: "wind" });
	const dewPointDiv = createDomElement("div", { class: "dew-point-div" });
	const dewPoint = createDomElement("p", { class: "dew-point" });
	const timeZoneDiv = createDomElement("div", { class: "time-zone-div" });
	const timeZone = createDomElement("p", { class: "time-zone" });
	const uvIndexDiv = createDomElement("div", { class: "uv-index-div" });
	const uvIndex = createDomElement("p", { class: "uv-index" });
	const pressureDiv = createDomElement("div", { class: "pressure-div" });
	const pressure = createDomElement("p", { class: "pressure" });
	const humidityDiv = createDomElement("div", { class: "humidity-div" });
	const humidity = createDomElement("p", { class: "humidity" });
	const MyDate = new Image();
	const MyHumidity = new Image();
	const MyPressure = new Image();
	const MyTimezone = new Image();
	const MySeaLevel = new Image();
	const MyWind = new Image();

	MyDate.src = Date;
	MyHumidity.src = Humidity;
	MyPressure.src = Pressure;
	MyTimezone.src = Timezone;
	MySeaLevel.src = SeaLevel;
	MyWind.src = Wind;

	windDiv.append(MyWind, wind);
	dewPointDiv.append(MySeaLevel, dewPoint);
	timeZoneDiv.append(MyTimezone, timeZone);
	uvIndexDiv.append(MyDate, uvIndex);
	pressureDiv.append(MyPressure, pressure);
	humidityDiv.append(MyHumidity, humidity);
	minorDataDiv.append(
		windDiv,
		dewPointDiv,
		timeZoneDiv,
		uvIndexDiv,
		pressureDiv,
		humidityDiv
	);
	return [wind, dewPoint, timeZone, uvIndex, pressure, humidity];
}

function superScript() {
	const supScript = createDomElement("sup", { class: "super-script" });
	const supScript2 = createDomElement("sup", { class: "super-script" });
	supScript.textContent = "o";
	supScript2.append(supScript, "C");
	return supScript2;
}

function dataDisplay() {
	const todayDataDiv = document.body.childNodes[2].childNodes[0];
	const weatherDesc = createDomElement("p", { class: "weather-desc" });
	const nameOfCity = createDomElement("h2", { class: "name-of-city" });
	const descIcon = createDomElement("img", { class: "desc-icon" });
	const tempDiv = createDomElement("div", { class: "temp-div" });
	const tempRange = createDomElement("div", { class: "temp-range" });
	const highTemp = createDomElement("p", { class: "high-temp" });
	const lowTemp = createDomElement("p", { class: "low-temp" });
	const feelsLikeTemp = createDomElement("p", { class: "feels-like-temp" });
	const temperatureDiv = createDomElement("div", { class: "temperature-div" });
	const temperature = createDomElement("p", { class: "temperature" });
	const minorDataDiv = createDomElement("div", { class: "minor-data-div" });

	tempRange.append(lowTemp, highTemp);
	temperatureDiv.append(temperature, descIcon);
	tempDiv.append(tempRange, temperatureDiv, feelsLikeTemp);
	todayDataDiv.append(weatherDesc, nameOfCity, tempDiv, minorDataDiv);

	return [
		weatherDesc,
		descIcon,
		nameOfCity,
		temperature,
		lowTemp,
		highTemp,
		feelsLikeTemp,
	];
}

export {
	createMainContents,
	minorDataReport,
	superScript,
	dataDisplay,
};