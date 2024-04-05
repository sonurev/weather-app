let apiKey = "705bd53eac960cf83aebefec395a92aa";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchbox = document.querySelector(".search input");
let searchbutton = document.querySelector(".search button");

const d = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
};
const formattedDate = d.toLocaleDateString("en-US", options);

async function handleSearch(City) {

  document.querySelector('.lower').classList.add('show-elements');

  const response = await fetch(apiUrl + City + `&appId=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.getElementById("Datime").innerHTML = formattedDate;
  document.getElementById(
    "temp"
  ).innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("condition").innerHTML = data.weather[0].description;
  document.getElementById(
    "wind"
  ).innerText = `Wind Speed: ${data.wind.speed} km/h`;
  document.getElementById(
    "humi"
  ).innerText = `Humidity: ${data.main.humidity}%`;
}

searchbutton.addEventListener("click", () => {
  handleSearch(searchbox.value);
});
