import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

// Array representing the days of the week.
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// The Forecast component receives 'data' as a prop.
const Forecast = ({ data }) => {
  // Get the current day of the week (0-6, where 0 is Sunday, 1 is Monday, and so on).
  const dayInAWeek = new Date().getDay();

  // Slice the WEEK_DAYS array to match the current day as the starting point of the forecast.
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      {/* Title for the forecast section */}
      <label className="title">Daily</label>

      {/* Accordion component to display daily forecast items */}
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            {/* AccordionItemHeading represents the header of each forecast day */}
            <AccordionItemHeading>
              <AccordionItemButton>
                {/* The div below represents the content of the forecast header */}
                <div className="daily-item">
                  {/* Weather icon */}
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  {/* Day of the week */}
                  <label className="day">{forecastDays[idx]}</label>
                  {/* Weather description */}
                  <label className="description">{item.weather[0].description}</label>
                  {/* Temperature range */}
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            {/* AccordionItemPanel contains the detailed weather information for each day */}
            <AccordionItemPanel>
              <div className="daily-details-grid">
                {/* Each of the divs below represents a specific weather detail */}
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
