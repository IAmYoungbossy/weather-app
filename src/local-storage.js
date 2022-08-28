if (localStorage.getItem("cityName") == null)
	localStorage.setItem("cityName", JSON.stringify("Port Harcourt"));

let cityName = JSON.parse(localStorage.getItem("cityName"));

function newName(setName) {
	cityName = setName;
}

function setCityName() {
	localStorage.setItem("cityName", JSON.stringify(cityName));
}

if (localStorage.getItem("watchlistArray") == null)
	localStorage.setItem("watchlistArray", JSON.stringify([]));

let watchlistArray = JSON.parse(localStorage.getItem("watchlistArray"));

function setwatchlistArray() {
	localStorage.setItem("watchlistArray", JSON.stringify(watchlistArray));
}

export { cityName, setCityName, newName, watchlistArray, setwatchlistArray };