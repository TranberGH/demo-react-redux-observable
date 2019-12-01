import {
  FETCH_DEPARTEMENTS,
  FETCH_DEPARTEMENTS_SUCCESS,
  FETCH_DEPARTEMENTS_ERROR,
} from './constants';

import { Departement } from '../../types';

function fetchDepartements(payload: string) {
  return {
    type: FETCH_DEPARTEMENTS,
    payload,
  }
}

function fetchDepartementsSuccess(payload: { region: string, departements: Departement[] }) {
  return {
    type: FETCH_DEPARTEMENTS_SUCCESS,
    payload,
  }
}

function fetchDepartementsError(error: Error | string) {
  let regionsError: Error;
  if (typeof error === 'string') {
    regionsError = new Error(error)
  } else {
    regionsError = error;
  }
  return {
    type: FETCH_DEPARTEMENTS_ERROR,
    payload: regionsError,
    error: true,
  }
}

export {
  fetchDepartements,
  fetchDepartementsSuccess,
  fetchDepartementsError,
}
