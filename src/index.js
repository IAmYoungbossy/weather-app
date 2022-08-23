/* eslint-disable no-use-before-define */
import "./style.css";

const cityName = "lagos state";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1d849694bc0f4283fc1f008f1259542e`,
  {
    mode: "cors",
  },
)
  .then((response) => response.json())
  .then((response) => {
    const { lat } = response.coord;
    const { lon } = response.coord;
    next7daysForecast(lat, lon);
  })
  .catch((error) => console.log(error));

function next7daysForecast(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=1d849694bc0f4283fc1f008f1259542e`,
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
}
