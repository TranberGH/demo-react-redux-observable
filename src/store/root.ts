import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { regions, departements, cities, search } from './reducers';
import {
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
  getCitiesByDepartementEpic,
  getCitiesEpic
} from './epics';

const rootEpic = combineEpics(
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
  getCitiesByDepartementEpic,
  getCitiesEpic
);

const rootReducer = combineReducers({
  regions,
  departements,
  cities,
  search
});

export { rootEpic, rootReducer };
