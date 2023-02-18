import React, { useState } from "react";
import FirstLoadApp from "./FirstLoadApp";
import SubmittedCity from "./SubmittedCity";
import ClickedCurrentLocation from "./ClickedCurrentLocation";
import axios from "axios";

export default function WeatherToday() {
  const [city, setCity] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [weather, setWeather] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [userWeather, setUserWeather] = useState("");

  function showWeather(response) {
    setSubmitted(true);
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
      date: new Date(response.data.dt * 1000),
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
    setClicked(true);
    setSubmitted(false);

    setUserWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      lowest: response.data.main.temp_min,
      highest: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
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
  if (submitted) {
    return (
      <div className="WeatherToday pagePaddingWeatherToday shadow">
        {form}
        <SubmittedCity city={displayName} weather={weather} />
      </div>
    );
  } else if (clicked) {
    return (
      <div className="WeatherToday pagePaddingWeatherToday shadow">
        {form}
        <ClickedCurrentLocation userWeather={userWeather} />
      </div>
    );
  } else {
    return (
      <div className="WeatherToday pagePaddingWeatherToday shadow">
        {form}
        <FirstLoadApp />
      </div>
    );
  }
}
