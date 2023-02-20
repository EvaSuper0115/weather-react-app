import React, { useState } from "react";

export default function DegreeNow(props) {
  const [temp, setTemp] = useState(props.celsius);

  function convertToFahreheit(event) {
    event.preventDefault();
    setTemp((props.celsius * 9) / 5 + 32);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemp(props.celsius);
  }

  return (
    <div className="DegreeNow">
      <div className="degreeNow">{Math.round(temp)} </div>
      <div className="degreeSign">
        <span onClick={convertToCelsius} className="celsius">
          °C{" "}
        </span>
        |
        <span onClick={convertToFahreheit} className="fahrenheit">
          °F{" "}
        </span>
      </div>
    </div>
  );
}
