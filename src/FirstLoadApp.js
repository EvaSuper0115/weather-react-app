import React from "react";
import { ThreeDots } from "react-loader-spinner";
export default function FirstLoadApp() {
  return (
    <div className="FirstLoadApp">
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
