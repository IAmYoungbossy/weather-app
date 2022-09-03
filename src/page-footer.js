import { createDomElement } from "./create-dom-element";

/**
 * Function for creating footer
 */
function createfooter() {
	const footer = createDomElement("footer");
	const anchorLink = createDomElement("a", {
		href: "https://github.com/IAmYoungbossy/weather-app",
	});
	const gitHubIcon = createDomElement("i", { class: "fa fa-github" });
	const iconsCredit = createDomElement("p");
	const weatherAPI = createDomElement("a", {
		target: "_blank",
		href: "https://openweathermap.org/",
	});
	const imageAPI = createDomElement("a", {
		target: "_blank",
		href: "https://unsplash.com/",
	});
	const icons8Anchor = createDomElement("a", {
		target: "_blank",
		href: "https://icons8.com/",
	});

	weatherAPI.textContent = " OpenWeatherMap ";
	imageAPI.textContent = " Unsplash ";
	icons8Anchor.textContent = " Icons8";
	iconsCredit.append(
		"Icons by",
		icons8Anchor,
		", Weather & Image API by",
		weatherAPI,
		" &",
		imageAPI
	);
	anchorLink.appendChild(gitHubIcon);
	footer.append(
		"Copyright \u00A9 2022 IAmYoungbossy",
		"  ",
		anchorLink,
		iconsCredit
	);
	document.body.appendChild(footer);
}

export { createfooter };