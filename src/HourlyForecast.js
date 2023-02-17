import React from "react";

export default function HourlyForecast() {
  return (
    <div>
      <div className="HourlyForecast pagePaddingWeatherNextFiveDays">
        <div className="hourlyTitle">
          <i className="fa-solid fa-clock"></i>HOURLY FORECAST
        </div>
        <div id="hourlyForecastRow">
          <div className="EachHour">
            <div className="hourCol col-lg-2">
              <div id="hours"> :00</div>
              <img
                id="hourlyIcons"
                className="hourlyForecastIcons"
                src="https://openweathermap.org/img/wn/04n@2x.png"
                alt="icon-id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
