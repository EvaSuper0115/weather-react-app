import React from "react";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <p>{props.weatherDetails.description}</p>
      <p>Humidity : {props.weatherDetails.humidity} %</p>
      <p>Wind : {Math.round(props.weatherDetails.wind)} mps</p>
    </div>
  );
}
