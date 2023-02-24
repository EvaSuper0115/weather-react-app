import axios from "axios";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleForecastResponse(response) {
    setForecastData(response.data.hourly);
  }
  if (loaded) {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let ForecastApiKey = "2bd326a60dc89a53287e446e819664df";
    let ForecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ForecastApiKey}&units=metric`;
    axios.get(ForecastApiUrl).then(handleForecastResponse);
    return null;
  } else {
    return (
      <div>
        <div className="HourlyForecast pagePaddingWeatherNextFiveDays">
          <div className="hourlyTitle">
            <i className="fa-solid fa-clock"></i>HOURLY FORECAST
          </div>

          <div className="hourlyForecastRow">
            <div className="hourCol col-lg-2">
              <div className="hours">13:00</div>
              <WeatherIcon code="01d" size={35} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
