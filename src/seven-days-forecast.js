import { createDomElement } from "./create-dom-element";
import { clearScreenLoader } from "./fetch-data";
import { superScript } from "./page-main";

function createForecastCard(daily) {
	const next7DaysDiv = document.body.childNodes[2].childNodes[1],
		card = createDomElement("div", { class: "card" }),
		dayAndDesc = createDomElement("div"),
		iconDiv = createDomElement("div", { class: "icon-div" }),
		tempDiv = createDomElement("div"),
		day = createDomElement("p"),
		weatherDesc = createDomElement("p"),
		weatherDescIcon = createDomElement("img"),
		lowTempSpan = createDomElement("span", { class: "convert" }),
		lowTemp = createDomElement("p"),
		highTempSpan = createDomElement("span", { class: "convert" }),
		highTemp = createDomElement("p");

	const date = new Date(daily.dt * 1000);
	const weekday = date.toLocaleString("en-us", { weekday: "long" });

	lowTempSpan.textContent = `${parseInt(daily.temp.min)}`;
	highTempSpan.textContent = `${parseInt(daily.temp.max)}`;
	day.textContent = `${weekday}`;
	weatherDesc.textContent = `${daily.weather[0].description}`;
	weatherDescIcon.src = `https://openweathermap.org/img/w/${daily.weather[0].icon}.png`;
	highTemp.append(highTempSpan, superScript());
	lowTemp.append(lowTempSpan, superScript());
	dayAndDesc.append(day, weatherDesc);
	tempDiv.append(highTemp, lowTemp);
	iconDiv.append(weatherDescIcon, tempDiv);
	card.append(dayAndDesc, iconDiv);
	next7DaysDiv.append(card);
}

function display7DaysForecast(response) {
	for (let i = 1; i < response.daily.length; i++)
		createForecastCard(response.daily[i]);
	clearScreenLoader();
}

export { createForecastCard, display7DaysForecast };