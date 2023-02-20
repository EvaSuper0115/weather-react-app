import React, { useState } from "react";

export default function UserWeatherNow(props) {
  const [temp, setTemp] = useState(props.userWeather.temperature);

  function convertToFahreheit(event) {
    event.preventDefault();
    setTemp((props.userWeather.temperature * 9) / 5 + 32);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemp(props.userWeather.temperature);
  }

  return (
    <div>
      <div className="DegreeNow">
        <div className="degreeNow">{Math.round(temp)} </div>
        <div className="degreeSign">
          <span onClick={convertToCelsius} className="celsius">
            °C{" "}
          </span>
          |
          <span onClick={convertToFahreheit} className="fahrenheit">
            °F{" "}
          </span>
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
    </div>
  );
}
