import React from "react";

import DailyForecast from "./DailyForecast.js";
export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <p className="forecastPageTitle">
        <i className="fa-solid fa-arrow-trend-up"></i>WEEKLY FORECAST
      </p>

      <div>
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
      </div>
    </div>
  );
}
