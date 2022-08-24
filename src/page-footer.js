import { createDomElement } from "./create-dom-element";

function createfooter() {
	const footer = createDomElement("footer");
	const anchorLink = createDomElement("a", {
		href: "https://github.com/IAmYoungbossy/weather-app",
	});
	const gitHubIcon = createDomElement("i", { fa: "fa-github" });
	const iconsCredit = createDomElement("p");
	const flatIconAnchor = createDomElement("a", {
		target: "_blank",
		href: "https://www.flaticon.com/",
	});
	const icons8Anchor = createDomElement("a", {
		target: "_blank",
		href: "https://icons8.com/",
	});

	flatIconAnchor.textContent = " Flaticon ";
	icons8Anchor.textContent = " Icons8 ";
	iconsCredit.append("Icons by", flatIconAnchor, " & ", icons8Anchor);
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