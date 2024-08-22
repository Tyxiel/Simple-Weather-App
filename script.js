// API Key (Constant)
const API_KEY = "e0283766cee7e7e70be7e75409ae8042";

// Fetch weather data based on city input
async function fetchWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  displayWeatherData(data);
}

// Handle weather search input
function weatherSearch() {
  const city = document.querySelector(".search-text").value;
  fetchWeatherData(city);
}

// Display weather data on the page
function displayWeatherData(data) {
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".description").textContent =
    data.weather[0].description;
  document.querySelector(".main-temp").textContent = `${data.main.temp}°`;
  document.querySelector(".max-temp").textContent = `${data.main.temp_max}°`;
  document.querySelector(".min-temp").textContent = `${data.main.temp_min}°`;
  document.querySelector(".humidity p").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind p").textContent = `${data.wind.speed} m/s`;
  document.querySelector(".visibility p").textContent = `${
    data.visibility / 1000
  } km`;

  const iconCode = data.weather[0].icon;

  const appleTouchIcons = [
    { sizes: "57x57" },
    { sizes: "60x60" },
    { sizes: "72x72" },
    { sizes: "76x76" },
    { sizes: "114x114" },
    { sizes: "120x120" },
    { sizes: "144x144" },
    { sizes: "152x152" },
    { sizes: "180x180" },
  ];

  appleTouchIcons.forEach((icon) => {
    let link = document.querySelector(
      `link[rel='apple-touch-icon'][sizes='${icon.sizes}']`
    );
    if (link) {
      link.href = `https://openweathermap.org/img/wn/${iconCode}.png`;
    }
  });

  // Update favicon links dynamically
  const favicons = [
    { sizes: "192x192" },
    { sizes: "32x32" },
    { sizes: "96x96" },
    { sizes: "16x16" },
  ];

  favicons.forEach((icon) => {
    let link = document.querySelector(
      `link[rel='icon'][sizes='${icon.sizes}']`
    );
    if (link) {
      link.href = `https://openweathermap.org/img/wn/${iconCode}.png`;
    }
  });

  // Update Microsoft application tile meta tags dynamically
  let tileColorMeta = document.querySelector(
    'meta[name="msapplication-TileColor"]'
  );
  if (tileColorMeta) {
    tileColorMeta.content = "#ffffff"; // Update as needed
  }

  let tileImageMeta = document.querySelector(
    'meta[name="msapplication-TileImage"]'
  );
  if (tileImageMeta) {
    tileImageMeta.content = `https://openweathermap.org/img/wn/${iconCode}.png`;
  }

  // Also update the image inside .temperature img if needed
  document.querySelector(
    ".temperature img"
  ).src = `https://openweathermap.org/img/wn/${iconCode}.png`;

  document.querySelector(
    ".temperature img"
  ).src = `https://openweathermap.org/img/wn/${iconCode}.png`;
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-theme");
}
