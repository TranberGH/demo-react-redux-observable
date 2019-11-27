import {
  FETCH_REGIONS,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_ERROR,
} from './constants';

import { Region } from '#/types';

function fetchRegions() {
  return {
    type: FETCH_REGIONS,
  }
}

function fetchRegionsSuccess(payload: Region[]) {
  return {
    type: FETCH_REGIONS_SUCCESS,
    payload,
  }
}

function fetchRegionsError(error: Error | string) {
  let regionsError: Error;
  if (typeof error === 'string') {
    regionsError = new Error(error)
  } else {
    regionsError = error;
  }
  return {
    type: FETCH_REGIONS_ERROR,
    payload: regionsError,
    error: true,
  }
}

export {
  fetchRegions,
  fetchRegionsSuccess,
  fetchRegionsError,
}
