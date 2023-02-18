import React from "react";

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
            <img
              className="hourlyForecastIcons"
              src="https://openweathermap.org/img/wn/04n@2x.png"
              alt="icon-id"
            />
          </div>
          <div className="hourCol col-lg-2">
            <div className="hours">13:00</div>
            <img
              className="hourlyForecastIcons"
              src="https://openweathermap.org/img/wn/04n@2x.png"
              alt="icon-id"
            />
          </div>
          <div className="hourCol col-lg-2">
            <div className="hours">13:00</div>
            <img
              className="hourlyForecastIcons"
              src="https://openweathermap.org/img/wn/04n@2x.png"
              alt="icon-id"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
