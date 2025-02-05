import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Houston",
    temperature: 47,
    date: "Sunday 11:25",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-submit" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <span>{weatherData.date}</span>,{" "}
              <span>{weatherData.description}</span>
              <br />
              Humidity:{" "}
              <span className="humidity-value">{weatherData.humidity}</span>,
              Wind:
              {weatherData.wind}mph
              <span className="wind-speed"></span>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div></div>
            <div className="weather-app-temperature">
              {weatherData.temperature}
            </div>
            <div className="weather-app-unit">°F</div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/annesura" target="_blank">
          Anne Sura
        </a>
        , is{" "}
        <a
          href="https://github.com/annesura/my-weather-project"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        and{" "}
        <a href="https://weather-by-anne.netlify.app/" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
