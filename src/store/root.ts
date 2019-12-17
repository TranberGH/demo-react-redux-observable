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

const rootEpic = combineEpics(
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
  getCitiesByDepartementEpic,
);

const rootReducer = combineReducers({
  regions,
  departements,
  cities,
});

export {
  rootEpic,
  rootReducer,
}
