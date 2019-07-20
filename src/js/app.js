import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/es/PNotifyStyleMaterial.js';
import getGeoPosition from './getGeoPosition';
import fetchWeather from './fetchWeather';
import currentWeatherTemplate from '../templates/currentWeatherTemplates.hbs';

// Set default styling.
PNotify.defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
PNotify.defaults.icons = 'material';

getGeoPosition()
  .then(position => {
    const coords = `${position.coords.latitude},${position.coords.longitude}`;
    fetch(coords);
  })
  .catch(error =>
    PNotify.error(
      'Нет прав доступа к геопозиции, используйте поиск по имени города.',
    ),
  );

const refs = {
  searchForm: document.querySelector('#search-form'),
  weatherSection: document.querySelector('#weather'),
};

refs.searchForm.addEventListener('submit', submitFormHandler);

function submitFormHandler(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.city.value;
  fetch(inputValue);

  e.currentTarget.reset();
}

function currentWeatherMarkup(currentWeather) {
  return currentWeatherTemplate(currentWeather);
}

function fetch(value) {
  fetchWeather(value)
    .then(currentWeather => {
      const markup = currentWeatherMarkup(currentWeather);
      refs.weatherSection.innerHTML = '';
      refs.weatherSection.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      PNotify.error(`${error.message}`);
    });

  refs.weatherSection.classList.remove('is-hidden');
}
