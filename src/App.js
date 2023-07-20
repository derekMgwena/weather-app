import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  // State variables to hold the current weather and forecast data.
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Handler function to fetch weather and forecast data when a location is searched.
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // Fetch current weather data for the selected location.
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    
    // Fetch forecast data for the selected location.
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Use Promise.all to wait for both API calls to complete before processing the responses.
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        // Parse the JSON data for current weather and forecast responses.
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Update the state with the current weather data and forecast data.
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      {/* Render the Search component and pass the handleOnSearchChange function as a prop */}
      <Search onSearchChange={handleOnSearchChange} />

      {/* Render the CurrentWeather component if currentWeather data is available */}
      {currentWeather && <CurrentWeather data={currentWeather} />}

      {/* Render the Forecast component if forecast data is available */}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
