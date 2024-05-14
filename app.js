const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "d6caf220930ef4c726fc67e2ff437565";
const searchbox = document.querySelector("#search-element");
const searchbtn = document.querySelector("#button");

async function checkweather(city) {
  const response = await fetch(
    url + city + "&appid=" + apiKey + "&units=metric"
  );
  const data = await response.json();
  console.log(data);
  document.querySelector("#temp-value").innerHTML =
    Math.round(data.main.temp) + "&#176c";
  document.querySelector("#city-name").innerHTML = data.name;
  document.querySelector("#hum-value").innerHTML = data.main.humidity + " %";
  document.querySelector("#wind-value").innerHTML = data.wind.speed + " m/s";
  document.querySelector("#airpressure-value").innerHTML =
    data.main.pressure + " hPa";
  document.querySelector("#visibility-value").innerHTML =
    data.visibility + " m";

  if (data.weather[0].main == "Clear") {
    document.querySelector(".icon").src = "clear.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".icon").src = "Mist.png";
  } else if (data.weather[0].main == "Clouds") {
    document.querySelector(".icon").src = "cloud.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".icon").src = "rain.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".icon").src = "snow.png";
  }

  document.querySelector(".data").style.display = "block";
}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
