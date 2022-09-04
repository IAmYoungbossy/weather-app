import { createDomElement } from "./create-dom-element";
import Date from "./icons/date.png";
import Humidity from "./icons/humidity.png";
import Pressure from "./icons/pressure.png";
import Timezone from "./icons/timezone.png";
import Wind from "./icons/wind.png";
import SeaLevel from "./icons/sealevel.png";
import DegreeIcon from "./icons/degree.png";
import { degree } from "./local-storage";
import { addListenerForEventTo, listenToEventFrom } from "./app-click-events";

function createMainContents() {
	const mainDiv = createDomElement("main", { class: "main" });
	createTodayForecastContainer(mainDiv);
	createNextdaysContainerDiv(mainDiv);
	getWatchlist(mainDiv);
	document.body.append(mainDiv);
}

function createTodayForecastContainer(mainDiv) {
	const todayDataDiv = createDomElement("div", { class: "today-data-div" });
	mainDiv.append(todayDataDiv);
}

function createNextdaysContainerDiv(mainDiv) {
	const next7DaysDiv = createDomElement("div", { class: "next-7days-div" });
	mainDiv.append(next7DaysDiv);
}

function getWatchlist(mainDiv) {
	const watchlistDiv = createDomElement("div", { class: "watchlist-div" });
	mainDiv.append(watchlistDiv);
}

function minorDataReport() {
	const minorDataDiv = document.body.childNodes[2].childNodes[0].childNodes[3],
		windDiv = createDomElement("div", { class: "wind-div" }),
		wind = createDomElement("p", { class: "wind" }),
		dewPointDiv = createDomElement("div", { class: "dew-point-div" }),
		dewPoint = createDomElement("p", { class: "dew-point" }),
		timeZoneDiv = createDomElement("div", { class: "time-zone-div" }),
		timeZone = createDomElement("p", { class: "time-zone" }),
		uvIndexDiv = createDomElement("div", { class: "uv-index-div" }),
		uvIndex = createDomElement("p", { class: "uv-index" }),
		pressureDiv = createDomElement("div", { class: "pressure-div" }),
		pressure = createDomElement("p", { class: "pressure" }),
		humidityDiv = createDomElement("div", { class: "humidity-div" }),
		humidity = createDomElement("p", { class: "humidity" }),
		MyDate = createDomElement("img", { src: Date }),
		MyHumidity = createDomElement("img", { src: Humidity }),
		MyPressure = createDomElement("img", { src: Pressure }),
		MyTimezone = createDomElement("img", { src: Timezone }),
		MySeaLevel = createDomElement("img", { src: SeaLevel }),
		MyWind = createDomElement("img", { src: Wind });

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
	const supScript = createDomElement("sup", { class: "super-script" }),
		supScript2 = createDomElement("sup", { class: "super-script" }),
		degreeSpan = createDomElement("span", { class: "super-span" });
	degreeSpan.textContent = degree;
	supScript.textContent = "o";
	supScript2.append(supScript, degreeSpan);
	addListenerForEventTo(document.querySelector(".degree"), degreeSpan);
	addListenerForEventTo(document.querySelector(".unit"), degreeSpan);
	return supScript2;
}

function dataDisplay() {
	const todayDataDiv = document.body.childNodes[2].childNodes[0];
	const weatherDesc = createDomElement("p", { class: "weather-desc" }),
		nameOfCity = createDomElement("h2", { class: "name-of-city" }),
		descIcon = createDomElement("img", { class: "desc-icon" }),
		tempDiv = createDomElement("div", { class: "temp-div" }),
		tempRange = createDomElement("div", { class: "temp-range" }),
		highTemp = createDomElement("p", { class: "high-temp" }),
		lowTemp = createDomElement("p", { class: "low-temp" }),
		feelsLikeTemp = createDomElement("p", { class: "feels-like-temp" }),
		temperatureDiv = createDomElement("div", { class: "temperature-div" }),
		temperature = createDomElement("p", { class: "temperature" }),
		minorDataDiv = createDomElement("div", { class: "minor-data-div" });

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

function convertBetweenUnits() {
	const todayDataDiv = document.body.children[0],
		unit = createDomElement("p", { class: "unit" }),
		unitDiv = createDomElement("div", { class: "unit-div" }),
		MyDegreeIcon = createDomElement("img", {
			class: "degree",
			src: DegreeIcon,
		});

	degree == "C" ? (unit.textContent = "F") : (unit.textContent = "C");
	unitDiv.append(MyDegreeIcon, unit);
	todayDataDiv.append(unitDiv);
	listenToEventFrom(unit, unit), listenToEventFrom(MyDegreeIcon, unit);
}

export {
	createMainContents,
	minorDataReport,
	superScript,
	dataDisplay,
	convertBetweenUnits,
};