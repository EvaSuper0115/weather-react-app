import React from "react";
import WeatherIcon from "./WeatherIcon";
import DegreeNow from "./DegreeNow";
import WeatherDetails from "./WeatherDetails";
import DegreeDetails from "./DegreeDetails";

export default function ClickedCurrentLocation(props) {
  return (
    <div className="ClickCurrentLocation">
      <div className="CityName">
        <h1 className="cityName">{props.userWeather.name}</h1>
      </div>
      <div className="degreeNowIcon">
        <WeatherIcon code={props.userWeather.icon} />
      </div>

      <DegreeNow celsius={props.userWeather.temperature} />

      <div className="WeatherDetails">
        <div className="row weatherDetailsWholeRow">
          <div className="col-sm-6 weatherDetailsColum">
            <WeatherDetails weatherDetails={props.userWeather} />
          </div>
          <div className="col-sm-6 degreeDetailsColum">
            <DegreeDetails
              low={props.userWeather.lowest}
              high={props.userWeather.highest}
              feelsLike={props.userWeather.feelsLike}
            />
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
