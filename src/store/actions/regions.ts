import {
  FETCH_REGIONS,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_ERROR,
} from './constants';

import {
  createError,
} from '../../core';

import { Region } from '../../types';

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
  return {
    type: FETCH_REGIONS_ERROR,
    payload: createError(error),
    error: true,
  }
}

export {
  fetchRegions,
  fetchRegionsSuccess,
  fetchRegionsError,
}
