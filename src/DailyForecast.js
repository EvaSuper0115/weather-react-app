import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import GetForecastDate from "./GetForecastDate";
export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);
  function handleForecastResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
    console.log(response.data.daily);
  }
  if (loaded) {
    return (
      <div>
        <p className="forecastPageTitle">
          <i className="fa-solid fa-calendar-week"></i>1 WEEK FORECAST
        </p>
        <div className="DailyForecast">
          {forecastData.slice(0, 7).map((forecast, index) => (
            <div key={index} className="row forecastWholeRow">
              <div className="DailyForecastDate col-3 forecastDatesRow">
                <GetForecastDate date={forecast.dt} />
              </div>
              <div className="DailyForecastIcon col-2 forecastIconRow">
                {" "}
                <WeatherIcon code={forecast.weather[0].icon} size={40} />
              </div>
              <h5 className="card-text forecastDescription col-4">
                {forecast.weather[0].description}
              </h5>
              <div className="DailyForecastDegree col-3 forecastDegreeRow">
                <h5 className="forecastMinCelsius card-text">
                  <i className="downArrow fa-solid fa-down-long"></i>
                  {Math.round(forecast.temp.min)}°
                </h5>
                <h5 className="forecastMaxCelsius card-text">
                  <i className="upArrow fa-solid fa-up-long"></i>
                  {Math.round(forecast.temp.max)}°
                </h5>
              </div>
            </div>
          ))}
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
