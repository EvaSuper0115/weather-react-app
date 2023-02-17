import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function WeatherToday() {
  const [city, setCity] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setDisplayName(response.data.name);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      lowest: response.data.main.temp_min,
      highest: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
      let metricUnit = "units=metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${metricUnit}`;
      axios.get(apiUrl).then(showWeather);
    }
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="SearchForm">
      <form
        onSubmit={handleSubmit}
        id="city-search"
        className="weather-search-form"
        autoComplete="off"
      >
        <div className="row">
          <div className="col-sm-10">
            <input
              onChange={handleChange}
              id="inputed-city"
              type="search"
              className="search-bar form-control"
              placeholder="search city"
              autoFocus="on"
            />
          </div>
          <div className="col-sm-2 searchIcon">
            <button className="searchButton btn" type="submit">
              <i className="fa-solid fa-circle-right"></i>
            </button>
          </div>
        </div>
      </form>

      <form id="current-location-search">
        <button className="currentLocationButton btn" type="button">
          <i className="fa-solid fa-location-arrow"></i>{" "}
        </button>
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div className="WeatherToday pagePaddingWeatherToday shadow">
        {form}
        <div className="CityName">
          <h1 id="user-inputed-city" className="cityName">
            {displayName}
          </h1>
        </div>
        <div className="DegreeNow">
          <div id="degree-number" className="degreeNow">
            {Math.round(weather.temperature)}
          </div>
          <div className="degreeSign">
            <span id="celsius" className="active">
              °C{" "}
            </span>
            |<span id="fahrenheit">°F </span>
          </div>
        </div>
        <div className="DegreeIcon">
          <img
            id="weatherNowIcon"
            className="degreeNowIcon"
            src={weather.icon}
            alt={weather.icon}
          />
        </div>
        <div className="WeatherDetails">
          <div className="row weatherDetailsWholeRow">
            <div className="col-sm-6 weatherDetailsColum">
              <div className="weatherDetails">
                <p id="weatherDetail-1">{weather.description}</p>
                <p id="weatherDetail-2">Humidity :{weather.humidity} %</p>
                <p id="weatherDetail-3">Wind :{Math.round(weather.wind)}mps</p>
              </div>
            </div>
            <div className="col-sm-6 degreeDetailsColum">
              <div className="degreeDetails">
                <p id="lowest-degree">
                  Lowest : {Math.round(weather.lowest)}°{" "}
                </p>
                <p id="highest-degree">
                  Highest:{Math.round(weather.highest)}°
                </p>
                <p id="feels-like-degree">
                  Feels like: {Math.round(weather.feelsLike)}°
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="LastUpdated">
          <div id="last-updated-title">last updated</div>
          <div id="date">Sat 25 Feb 2023</div>
          <div id="last-updated-time">14:23</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherToday pagePaddingWeatherToday shadow">
        {form}
        <div className="loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="rgb(224,235,231)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </div>
    );
  }
}
