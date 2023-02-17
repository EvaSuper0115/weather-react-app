import React from "react";
import logo from "./logo.svg";
import WeatherToday from "./WeatherToday.js";
import HourlyForecast from "./HourlyForecast.js";
import WeeklyForecast from "./WeeklyForecast.js";
export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="row">
        <div className="col">
          <button id="switch-mode-button">
            <i className="fa-solid fa-toggle-on"></i>{" "}
          </button>
        </div>
        <div className="col logoCol">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          {" "}
          <WeatherToday />
          <HourlyForecast />
        </div>
        <div className="col-lg-6">
          <div className="pagePaddingWeatherNextFiveDays">
            <WeeklyForecast />
          </div>
        </div>
      </div>
      <p id="footer">
        Designed and Coded with React by{" "}
        <a
          href="https://golden-madeleine-3016d7.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          On Tai To
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/EvaSuper0115/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
        and{" "}
        <a href="#" target="_blank">
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
