const baseUrl = 'https://api.apixu.com/v1/';
const apiKey = 'key=3cb596775cee4eedbcf112350191407';
const currentweather = 'current.json?';

function fetchWeather(query) {
  const queryParam = `&q=${query}`;
  return fetch(baseUrl + currentweather + apiKey + queryParam).then(
    response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    },
  );
}

export default fetchWeather;
