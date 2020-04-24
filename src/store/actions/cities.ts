import {
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR
} from './constants';

import { City } from '../../types';

function fetchCities(payload: string) {
  return {
    type: FETCH_CITIES,
    payload
  };
}

function fetchCitiesSuccess(payload: { departement: string; cities: City[] }) {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload
  };
}

function fetchCitiesError(error: Error | string) {
  let citiesError: Error;
  if (typeof error === 'string') {
    citiesError = new Error(error);
  } else {
    citiesError = error;
  }
  return {
    type: FETCH_CITIES_ERROR,
    payload: citiesError,
    error: true
  };
}

export { fetchCities, fetchCitiesSuccess, fetchCitiesError };
