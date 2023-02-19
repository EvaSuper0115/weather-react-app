import React from "react";

export default function DegreeDetails(props) {
  return (
    <div className="degreeDetails">
      <p>Lowest : {Math.round(props.low)}° </p>
      <p>Highest: {Math.round(props.high)}°</p>
      <p>Feels like: {Math.round(props.feelsLike)}°</p>
    </div>
  );
}
