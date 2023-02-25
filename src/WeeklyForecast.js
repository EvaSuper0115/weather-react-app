import React from "react";

import DailyForecast from "./DailyForecast.js";
export default function WeeklyForecast(props) {
  return (
    <div className="WeeklyForecast">
      <p className="forecastPageTitle">
        <i className="fa-solid fa-calendar-week"></i>1 WEEK FORECAST
      </p>

      <div>
        <DailyForecast coords={props.coords} />
      </div>
    </div>
  );
}
