import {
  FETCH_REGIONS,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_ERROR,
} from './constants';

function fetchRegions() {
  return {
    type: FETCH_REGIONS,
  }
}

function fetchRegionsSuccess(payload) {
  return {
    type: FETCH_REGIONS_SUCCESS,
    payload,
  }
}

function fetchRegionsError(error) {
  return {
    type: FETCH_REGIONS_ERROR,
    payload: new Error(error),
    error: true,
  }
}

export {
  fetchRegions,
  fetchRegionsSuccess,
  fetchRegionsError,
}
