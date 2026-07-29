import "./style.css";
import getWeather from "./weather.js";
import displayWeather from "./dom.js";

const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-inp");

form.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  const city = searchInput.value;

  try {
    const weatherData = await getWeather(city);

    displayWeather(weatherData);
  } catch (error) {
    console.error(error);
  }
}
