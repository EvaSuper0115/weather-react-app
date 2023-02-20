import React, { useState } from "react";

export default function WeatherNow(props) {
  let celsius = props.weather.temperature;
  const [temp, setTemp] = useState(celsius);
  console.log(temp);

  function convertToFahreheit(event) {
    event.preventDefault();
    setTemp((celsius * 9) / 5 + 32);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemp(celsius);
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
    </div>
  );
}
