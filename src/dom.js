export default function displayWeather(data) {
  const weatherDataContainer = document.querySelector(
    ".weather-data-container",
  );
  weatherDataContainer.innerHTML = "";

  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  const city = document.createElement("p");
  city.classList.add("city");
  city.textContent = data.city;

  const temp = document.createElement("h2");
  temp.classList.add("temperature");
  temp.textContent = `${data.temp}°`;

  const condition = document.createElement("p");
  condition.classList.add("condition");
  condition.textContent = data.condition;

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  humidity.textContent = `Humidity: ${data.humidity}%`;

  weatherCard.append(city, temp, condition, humidity);

  weatherDataContainer.append(weatherCard);
}

export function showLoader() {
  const weatherDataContainer = document.querySelector(
    ".weather-data-container",
  );
  weatherDataContainer.innerHTML = "";

  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  const para = document.createElement("p");
  para.textContent = "🌤 Loading weather...";

  weatherCard.append(para);

  weatherDataContainer.append(weatherCard);
}
