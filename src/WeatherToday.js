import React from "react";
import axios from "axios";
export default function WeatherToday() {
  let form = (
    <div className="SearchForm">
      <form id="city-search" className="weather-search-form" autoComplete="off">
        <div className="row">
          <div className="col-sm-10">
            <input
              id="inputed-city"
              type="search"
              className="search-bar form-control"
              placeholder="search city"
              autoFocus="on"
            />
          </div>
          <div className="col-sm-2 searchIcon">
            <button className="searchButton btn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>

      <form id="current-location-search">
        <button className="currentLocationButton btn" type="button">
          <i className="fa-solid fa-map-location-dot"></i>{" "}
          <small className="currentLocation">current location</small>
        </button>
      </form>
    </div>
  );
  return (
    <div className="WeatherToday pagePaddingWeatherToday shadow">
      {form}
      <div className="CityName">
        <h1 id="user-inputed-city" className="cityName">
          Hong Kong
        </h1>
      </div>
      <div className="DegreeNow">
        <div id="degree-number" className="degreeNow">
          10
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
          src={`https://openweathermap.org/img/wn/04n@2x.png`}
          alt="{icon-id-{weatherIcons.iconID}"
        />
      </div>
      <div className="WeatherDetails">
        <div className="row weatherDetailsWholeRow">
          <div className="col-sm-6 weatherDetailsColum">
            <div className="weatherDetails">
              <p id="weatherDetail-1"></p>
              <p id="weatherDetail-2">Humidity : %</p>
              <p id="weatherDetail-3">Wind :mps</p>
            </div>
          </div>
          <div className="col-sm-6 degreeDetailsColum">
            <div className="degreeDetails">
              <p id="lowest-degree">Lowest : ° </p>
              <p id="highest-degree">Highest: °</p>
              <p id="feels-like-degree">Feels like: °</p>
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
}
