import React from "react";
import { ThreeDots } from "react-loader-spinner";
import DailyForecast from "./DailyForecast.js";
export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <p className="forecastPageTitle">
        <i className="fa-solid fa-arrow-trend-up"></i>WEEKLY FORECAST
      </p>
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="rgb(224,235,231)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
      <div id="forecast-for-each-day">
        <DailyForecast />
      </div>
    </div>
  );
}
