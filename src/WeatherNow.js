import React, { useEffect, useState } from "react";

export default function WeatherNow(props) {
  const [temp, setTemp] = useState(props.weather.temperature);
  const [lowTemp, setLowTemp] = useState(props.weather.lowest);
  const [highTemp, setHighTemp] = useState(props.weather.highest);
  const [feelsLike, setFeelsLike] = useState(props.weather.feelsLike);

  useEffect(() => {
    setTemp(props.weather.temperature);
    setLowTemp(props.weather.lowest);
    setHighTemp(props.weather.highest);
    setFeelsLike(props.weather.feelsLike);
  }, [
    props.weather.temperature,
    props.weather.lowest,
    props.weather.highest,
    props.weather.feelsLike,
  ]);

  function convertToFahreheit(event) {
    event.preventDefault();
    setTemp((props.weather.temperature * 9) / 5 + 32);
    setLowTemp((props.weather.lowest * 9) / 5 + 32);
    setHighTemp((props.weather.highest * 9) / 5 + 32);
    setFeelsLike((props.weather.feelsLike * 9) / 5 + 32);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemp(props.weather.temperature);
    setLowTemp(props.weather.lowest);
    setHighTemp(props.weather.highest);
    setFeelsLike(props.weather.feelsLike);
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
