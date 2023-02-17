import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
