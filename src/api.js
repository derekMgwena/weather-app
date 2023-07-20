// Configuration options for making API requests to the Geo API.
export const geoApiOptions = {
  method: "GET",
  headers: {
    // Enter your RapidAPI key for the Geo API here.
    "X-RapidAPI-Key": "f8bad06311msh398899cea0b798bp1b4e5cjsnb5143edddc13",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// Base URL for the Geo API.
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// Base URL for the OpenWeatherMap API.
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

// Enter your API key from OpenWeatherMap API here.
export const WEATHER_API_KEY = "ef17d8bd126f0a74ef70cde50af705c6";

/* const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'f8bad06311msh398899cea0b798bp1b4e5cjsnb5143edddc13',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */