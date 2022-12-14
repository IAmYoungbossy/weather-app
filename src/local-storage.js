/**
 * Storage For City Name
 */
if (localStorage.getItem("cityName") === null)
	localStorage.setItem("cityName", JSON.stringify("Port Harcourt"));
let cityName = JSON.parse(localStorage.getItem("cityName"));
function newName(setName) {
	cityName = setName;
}
function setCityName() {
	localStorage.setItem("cityName", JSON.stringify(cityName));
}

/**
 * Array For Names Of Cities On Watchlist
 */
if (localStorage.getItem("watchlistArray") == null)
	localStorage.setItem("watchlistArray", JSON.stringify(["Johannesburg", "Bori", "Las Vegas"]));
let watchlistArray = JSON.parse(localStorage.getItem("watchlistArray"));
function setwatchlistArray() {
	localStorage.setItem("watchlistArray", JSON.stringify(watchlistArray));
}

/**
 * Storage For Unit Preferrence
 */
if (localStorage.getItem("degree") == null)
	localStorage.setItem("degree", JSON.stringify("C"));
let degree = JSON.parse(localStorage.getItem("degree"));
function newDegree(setName) {
	degree = setName;
}
function setDegree() {
	localStorage.setItem("degree", JSON.stringify(degree));
}

export {
	cityName,
	setCityName,
	newName,
	watchlistArray,
	setwatchlistArray,
	degree,
	setDegree,
	newDegree,
};