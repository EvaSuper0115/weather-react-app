import React from "react";
import logo from "./logo.svg";
import WeatherToday from "./WeatherToday.js";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      {" "}
      <WeatherToday />
      <p id="footer">
        Designed and Coded with React{" "}
        <span>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        by{" "}
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
