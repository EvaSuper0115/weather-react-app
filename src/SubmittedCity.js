import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherNow from "./WeatherNow";

export default function SubmittedCity(props) {
  return (
    <div className="SubmittedCity">
      <div className="CityName">
        <h1 className="cityName">{props.city}</h1>
      </div>
      <div className="degreeNowIcon">
        <WeatherIcon code={props.weather.icon} size={60} />
      </div>
      <WeatherNow weather={props.weather} />

      <div className="LastUpdated">
        <div className="last-updated-title">last updated</div>
        <div className="date">{props.weather.date.toDateString()}</div>
        <div className="last-updated-time">
          {props.weather.date.toLocaleTimeString("it-IT")}
        </div>
      </div>
    </div>
  );
}
