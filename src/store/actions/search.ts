import {
  SEARCH_CITIES,
  SEARCH_CITIES_SUCCESS,
  SEARCH_CITIES_ERROR
} from './constants';

import { createError } from '../../core';

function searchCities(payload: string) {
  return {
    type: SEARCH_CITIES,
    payload
  };
}

function searchCitiesSuccess(payload: any[]) {
  return {
    type: SEARCH_CITIES_SUCCESS,
    payload
  };
}

function searchCitiesError(error: Error | string) {
  return {
    type: SEARCH_CITIES_ERROR,
    payload: createError(error),
    error: true
  };
}

export { searchCities, searchCitiesSuccess, searchCitiesError };
