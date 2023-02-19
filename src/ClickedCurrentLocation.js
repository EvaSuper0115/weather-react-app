import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ClickedCurrentLocation(props) {
  return (
    <div className="ClickCurrentLocation">
      <div className="CityName">
        <h1 className="cityName">{props.userWeather.name}</h1>
      </div>
      <div className="degreeNowIcon">
        <WeatherIcon code={props.userWeather.icon} />
      </div>
      <div className="DegreeNow">
        <div className="degreeNow">
          {Math.round(props.userWeather.temperature)}
        </div>
        <div className="degreeSign">
          <span className="celsius active">°C </span>|
          <span className="fahrenheit">°F </span>
        </div>
      </div>

      <div className="WeatherDetails">
        <div className="row weatherDetailsWholeRow">
          <div className="col-sm-6 weatherDetailsColum">
            <div className="weatherDetails">
              <p>{props.userWeather.description}</p>
              <p>Humidity : {props.userWeather.humidity} %</p>
              <p>Wind : {Math.round(props.userWeather.wind)} mps</p>
            </div>
          </div>
          <div className="col-sm-6 degreeDetailsColum">
            <div className="degreeDetails">
              <p>Lowest : {Math.round(props.userWeather.lowest)}° </p>
              <p>Highest: {Math.round(props.userWeather.highest)}°</p>
              <p>Feels like: {Math.round(props.userWeather.feelsLike)}°</p>
            </div>
          </div>
        </div>
      </div>
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
