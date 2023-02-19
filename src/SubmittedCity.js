import React from "react";
import WeatherIcon from "./WeatherIcon";
import DegreeNow from "./DegreeNow";
export default function SubmittedCity(props) {
  return (
    <div className="SubmittedCity">
      <div className="CityName">
        <h1 className="cityName">{props.city}</h1>
      </div>
      <div className="degreeNowIcon">
        <WeatherIcon code={props.weather.icon} />
      </div>
      <DegreeNow celsius={props.weather.temperature} />

      <div className="WeatherDetails">
        <div className="row weatherDetailsWholeRow">
          <div className="col-sm-6 weatherDetailsColum">
            <div className="weatherDetails">
              <p>{props.weather.description}</p>
              <p>Humidity : {props.weather.humidity} %</p>
              <p>Wind : {Math.round(props.weather.wind)} mps</p>
            </div>
          </div>
          <div className="col-sm-6 degreeDetailsColum">
            <div className="degreeDetails">
              <p>Lowest : {Math.round(props.weather.lowest)}° </p>
              <p>Highest: {Math.round(props.weather.highest)}°</p>
              <p>Feels like: {Math.round(props.weather.feelsLike)}°</p>
            </div>
          </div>
        </div>
      </div>
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
