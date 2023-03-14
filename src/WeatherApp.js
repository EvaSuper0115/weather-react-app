import React from "react";

import WeatherToday from "./WeatherToday.js";
import { Radio } from "react-loader-spinner";
export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      {" "}
      <WeatherToday />
      <div id="footer">
        <div>
          <Radio
            visible={true}
            colors={["#f4ffe9", "#f4ffe9", "#f4ffe9"]}
            height="55"
            width="55"
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass="radio-wrapper"
          />
          Allow location access to use.
        </div>{" "}
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
      </div>
    </div>
  );
}
