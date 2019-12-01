import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import {
  regions,
  departements,
  cities,
} from './reducers';
import {
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
  getCitiesByDepartementEpic,
} from './epics';

export const rootEpic = combineEpics(
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
  getCitiesByDepartementEpic,
);

export const rootReducer = combineReducers({
  regions,
  departements,
  cities,
});
