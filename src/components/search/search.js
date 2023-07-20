import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

// The Search component receives an 'onSearchChange' function as a prop.
const Search = ({ onSearchChange }) => {
  // State to hold the current search value.
  const [search, setSearch] = useState(null);

  // Function to load options asynchronously based on the user input.
  const loadOptions = (inputValue) => {
    return fetch(
      // API endpoint URL to retrieve city data based on the user's input.
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions // Configuration options for the API request (headers, etc.).
    )
      .then((response) => response.json()) // Convert API response to JSON.
      .then((response) => {
        return {
          // Map the response data to options compatible with the AsyncPaginate component.
          options: response.data.map((city) => {
            return {
              // Concatenate latitude and longitude as the option value.
              value: `${city.latitude} ${city.longitude}`,
              // Display the city name and country code as the option label.
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  // Handler function to update the search state and trigger the parent component's onSearchChange callback.
  const handleOnChange = (searchData) => {
    setSearch(searchData); // Update the search state with the selected option.
    onSearchChange(searchData); // Call the onSearchChange function provided by the parent component.
  };

  // The component returns an AsyncPaginate component from 'react-select-async-paginate'.
  return (
    <AsyncPaginate
      placeholder="Search for city" // Placeholder text for the search input.
      debounceTimeout={600} // Debounce timeout (in milliseconds) to delay API requests.
      value={search} // Current selected option value.
      onChange={handleOnChange} // Event handler for option selection changes.
      loadOptions={loadOptions} // Function to load options asynchronously based on user input.
    />
  );
};

export default Search;
