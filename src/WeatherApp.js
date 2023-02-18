import React from "react";
import logo from "./logo.svg";
import WeatherToday from "./WeatherToday.js";

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
          <a
            href="https://reactjs.org/"
            target="_blank"
            title="React"
            rel="noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      </div>
      <div className="row">
        {" "}
        <WeatherToday />
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
        <a
          href="https://app.netlify.com/teams/evasuper0115/overview"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
