const baseUrl = 'https://api.weatherstack.com/';
const apiKey = 'access_key=0979667ce34bb3a5fd10e72265e85685';
const currentweather = 'current?';

function fetchWeather(query) {
  const queryParam = `&query=${query}`;
  return fetch(baseUrl + currentweather + apiKey + queryParam).then(
    response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    },
  );
}

export default fetchWeather;
