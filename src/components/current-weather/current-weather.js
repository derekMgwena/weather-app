import React from "react";
import "./current-weather.css"; // Importing the CSS file for styling.

// The CurrentWeather component receives 'data' as a prop containing weather information.
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top section containing city name and weather description */}
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        {/* Weather icon */}
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>

      {/* Bottom section containing temperature and additional weather details */}
      <div className="bottom">
        {/* Current temperature */}
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        {/* Weather details container */}
        <div className="details">
          {/* Weather parameter rows */}
          <div className="parameter-row">
            {/* Label for weather details */}
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            {/* Label and value for 'Feels like' temperature */}
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            {/* Label and value for wind speed */}
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            {/* Label and value for humidity */}
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            {/* Label and value for atmospheric pressure */}
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
