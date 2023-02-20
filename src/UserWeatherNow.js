import React, { useState } from "react";

export default function UserWeatherNow(props) {
  const [temp, setTemp] = useState(props.userWeather.temperature);
  const [lowTemp, setLowTemp] = useState(props.userWeather.lowest);
  const [highTemp, setHighTemp] = useState(props.userWeather.highest);
  const [feelsLike, setFeelsLike] = useState(props.userWeather.feelsLike);

  function convertToFahreheit(event) {
    event.preventDefault();
    setTemp((props.userWeather.temperature * 9) / 5 + 32);
    setLowTemp((props.userWeather.lowest * 9) / 5 + 32);
    setHighTemp((props.userWeather.highest * 9) / 5 + 32);
    setFeelsLike((props.userWeather.feelsLike * 9) / 5 + 32);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemp(props.userWeather.temperature);
    setLowTemp(props.userWeather.lowest);
    setHighTemp(props.userWeather.highest);
    setFeelsLike(props.userWeather.feelsLike);
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
              <p>Lowest : {Math.round(lowTemp)}° </p>
              <p>Highest: {Math.round(highTemp)}°</p>
              <p>Feels like: {Math.round(feelsLike)}°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
