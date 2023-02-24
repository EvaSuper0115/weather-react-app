import React from "react";
import WeatherIcon from "./WeatherIcon";
import UserWeatherNow from "./UserWeatherNow";

export default function ClickedCurrentLocation(props) {
  return (
    <div className="ClickCurrentLocation">
      <div className="CityName">
        <h1 className="cityName">{props.userWeather.name}</h1>
      </div>
      <div className="degreeNowIcon">
        <WeatherIcon code={props.userWeather.icon} size={60} />
      </div>

      <UserWeatherNow userWeather={props.userWeather} />

      <div className="LastUpdated">
        <div className="last-updated-title">last updated</div>
        <div className="date">{props.userWeather.date.toDateString()}</div>
        <div className="last-updated-time">
          {props.userWeather.date.toLocaleTimeString("it-IT")}
        </div>
      </div>
    </div>
  );
}
