function getWeatherData(location) {
  const apiKey = "9eb5a56be82e0d7d2b93a45e43cd92f8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherData = {
        temperature: data.main.temp,
        condition: data.weather[0].main,
        location: data.name,
      };
      return weatherData;
    });
}
function updateUI(weatherData) {
  const temperature = document.querySelector("#temperature");
  const condition = document.querySelector("#condition");
  // search input
  const location = document.querySelector("#location");
  const toggle = document.querySelector("#toggle");

  temperature.textContent = `${weatherData.temperature}°F`;
  condition.textContent = weatherData.condition;
  location.textContent = weatherData.location;
}
// search button
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", () => {
  const location = searchBar.value;
  getWeatherData(location)
    .then((weatherData) => {
      updateUI(weatherData);
    })
    .catch((error) => {
      console.log(error);
    });
});
