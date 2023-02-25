import React from "react";

export default function GetHour(props) {
  let hours = new Date(props.hour * 1000);
  let formattedHours = hours.getHours();

  if (formattedHours < 10) {
    return <div className="GetHour">0{formattedHours} </div>;
  } else {
    return <div className="GetHour">{formattedHours}</div>;
  }
}
