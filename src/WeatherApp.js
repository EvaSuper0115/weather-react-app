import React from "react";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <button id="switch-mode-button">
        <i className="fa-solid fa-toggle-on"></i>{" "}
      </button>
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <div className="pagePaddingWeatherNextFiveDays"></div>
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
        <a href="#" target="_blank">
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
