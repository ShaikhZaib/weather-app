export default async function getWeather(city) {
  const api_key = "ZJYMXX9VHFH33B84ULGVJMCN3";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api_key}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not fetch the search results.");
  }

  const data = await response.json();
  return data;
}
