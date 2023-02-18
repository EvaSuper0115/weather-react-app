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

  function showWeatherOfUserCurrentLocation(response) {
    console.log(response.data);
  }

  function showCurrentLocation(position) {
    let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let metricUnit = "units=metric";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let userCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&${metricUnit}&appid=${apiKey}`;
    axios.get(userCityApiUrl).then(showWeatherOfUserCurrentLocation);
  }

  function handleClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  }
  let form = (
    <div className="SearchForm">
      <form
        onSubmit={handleSubmit}
        className="weather-search-form"
        autoComplete="off"
      >
        <div className="row">
          <div className="col-sm-10">
            <input
              onChange={handleChange}
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

      <form className="current-location-search">
        <button
          onClick={handleClick}
          className="currentLocationButton btn"
          type="button"
        >
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
          <h1 className="cityName">{displayName}</h1>
        </div>
        <div className="DegreeIcon">
          <img
            className="degreeNowIcon"
            src={weather.icon}
            alt={weather.icon}
          />
        </div>
        <div className="DegreeNow">
          <div className="degreeNow">{Math.round(weather.temperature)}</div>
          <div className="degreeSign">
            <span className="celsius active">°C </span>|
            <span className="fahrenheit">°F </span>
          </div>
        </div>

        <div className="WeatherDetails">
          <div className="row weatherDetailsWholeRow">
            <div className="col-sm-6 weatherDetailsColum">
              <div className="weatherDetails">
                <p>{weather.description}</p>
                <p>Humidity : {weather.humidity} %</p>
                <p>Wind : {Math.round(weather.wind)} mps</p>
              </div>
            </div>
            <div className="col-sm-6 degreeDetailsColum">
              <div className="degreeDetails">
                <p>Lowest : {Math.round(weather.lowest)}° </p>
                <p>Highest: {Math.round(weather.highest)}°</p>
                <p>Feels like: {Math.round(weather.feelsLike)}°</p>
              </div>
            </div>
          </div>
        </div>
        <div className="LastUpdated">
          <div className="last-updated-title">last updated</div>
          <div className="date">Sat 25 Feb 2023</div>
          <div className="last-updated-time">13:35</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherToday pagePaddingWeatherToday shadow">
        {form}

        <div className="CityName">
          <h1 className="cityName">London</h1>
        </div>
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
        <div className="DegreeNow">
          <div className="degreeNow">10</div>
          <div className="degreeSign">
            <span className="active">°C </span>|<span>°F </span>
          </div>
        </div>

        <div className="WeatherDetails">
          <div className="row weatherDetailsWholeRow">
            <div className="col-sm-6 weatherDetailsColum">
              <div className="weatherDetails">
                <p> Sunny </p>
                <p>Humidity : 30 %</p>
                <p>Wind : 4 mps</p>
              </div>
            </div>
            <div className="col-sm-6 degreeDetailsColum">
              <div className="degreeDetails">
                <p>Lowest : 3° </p>
                <p>Highest : 7°</p>
                <p>Feels like : 5°</p>
              </div>
            </div>
          </div>
        </div>
        <div className="LastUpdated">
          <div className="last-updated-title">last updated</div>
          <div className="date">Sat 25 Feb 2023</div>
          <div className="last-updated-time">14:23</div>
        </div>
      </div>
    );
  }
}
