import React from "react";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row forecastWholeRow">
        <div className="DailyForecastDate col-5 forecastDatesRow">
          <div className="nextDays">
            <h5 className="forecastDate">23 FEB 2023</h5>
            <h5>Fri</h5>
          </div>
        </div>
        <div className="DailyForecastIcon col-2 forecastIconRow">
          {" "}
          <img
            className="forecastIcon card-text"
            src="https://openweathermap.org/img/wn/04n@2x.png"
            alt=""
          />
        </div>
        <div className="DailyForecastDegree col-5 forecastDegreeRow">
          <h5 className="forecastMinCelsius card-text">
            <i className="downArrow fa-solid fa-down-long"></i>
            2°
          </h5>
          <h5 className="forecastMaxCelsius card-text">
            <i className="upArrow fa-solid fa-up-long"></i>
            5°
          </h5>
        </div>
      </div>
    </div>
  );
}
