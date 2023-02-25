import React from "react";

export default function GetForecastDate(props) {
  let date = new Date(props.date * 1000);
  let formattedDates = date.toLocaleDateString();
  let weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let days = new Date(props.date * 1000);
  let formattedDays = weekdays[days.getDay()];

  return (
    <div className="nextDays">
      <h5 className="forecastDate">{formattedDates}</h5>
      <h5>{formattedDays}</h5>
    </div>
  );
}
