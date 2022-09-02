import { createDomElement } from "./create-dom-element";

function createForecastCard(daily) {
	const next7DaysDiv = document.body.childNodes[2].childNodes[1],
		card = createDomElement("div", { class: "card" }),
		dayAndDesc = createDomElement("div"),
		iconDiv = createDomElement("div", { class: "icon-div" }),
		tempDiv = createDomElement("div"),
		day = createDomElement("p"),
		weatherDesc = createDomElement("p"),
		weatherDescIcon = createDomElement("img"),
		lowTemp = createDomElement("p"),
		highTemp = createDomElement("p");

	const date = new Date(daily.dt * 1000);
	const weekday = date.toLocaleString("en-us", { weekday: "long" });

	day.textContent = `${weekday}`;
	weatherDesc.textContent = `${daily.weather[0].description}`;
	weatherDescIcon.src = `https://openweathermap.org/img/w/${daily.weather[0].icon}.png`;
	highTemp.textContent = `${daily.temp.max}`;
	lowTemp.textContent = `${daily.temp.min}`;
	dayAndDesc.append(day, weatherDesc);
	tempDiv.append(highTemp, lowTemp);
	iconDiv.append(weatherDescIcon, tempDiv);
	card.append(dayAndDesc, iconDiv);
	next7DaysDiv.append(card);
}

export { createForecastCard };