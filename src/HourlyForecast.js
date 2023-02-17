import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function HourlyForecast() {
  return (
    <div>
      <div className="HourlyForecast pagePaddingWeatherNextFiveDays">
        <div className="hourlyTitle">
          <i className="fa-solid fa-clock"></i>HOURLY FORECAST
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

        <div id="hourlyForecastRow">
          <div className="EachHour">
            <div className="hourCol col-lg-2">
              <div id="hours"></div>
              <img
                id="hourlyIcons"
                className="hourlyForecastIcons"
                src="https://openweathermap.org/img/wn/04n@2x.png"
                alt="icon-id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
