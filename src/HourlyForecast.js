import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function HourlyForecast() {
  return (
    <div>
      <div className="HourlyForecast pagePaddingWeatherNextFiveDays">
        <div className="hourlyTitle">
          <i className="fa-solid fa-clock"></i>HOURLY FORECAST
        </div>

        <div className="hourlyForecastRow">
          <div className="hourCol col-lg-2">
            <div className="hours">13:00</div>
            <WeatherIcon code="01d" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
