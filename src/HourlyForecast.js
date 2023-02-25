import axios from "axios";
import React, { useState } from "react";
import GetHour from "./GetHour";
import WeatherIcon from "./WeatherIcon";
export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");
  function handleForecastResponse(response) {
    setLoaded(true);
    setForecastData(response.data.hourly);
    console.log(response.data);
  }
  if (loaded) {
    return (
      <div>
        <div className="HourlyForecast pagePaddingWeatherNextFiveDays">
          <div className="hourlyTitle">
            <i className="fa-solid fa-clock"></i>HOURLY FORECAST
          </div>

          <div className="hourlyForecastRow">
            <div className="hourCol col-lg-2">
              <GetHour hour={forecastData[1].dt} />
              <WeatherIcon code={forecastData[1].weather[0].icon} size={35} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let ForecastApiKey = "c5f0e59acac64258bb92ed027d20c68f";
    let ForecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ForecastApiKey}&units=metric`;
    axios.get(ForecastApiUrl).then(handleForecastResponse);
    return null;
  }
}
