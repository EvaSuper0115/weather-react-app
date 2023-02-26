import React from "react";

import DailyForecast from "./DailyForecast.js";
export default function WeeklyForecast(props) {
  return (
    <div className="WeeklyForecast">
      <div>
        <DailyForecast coords={props.coords} />
      </div>
    </div>
  );
}
