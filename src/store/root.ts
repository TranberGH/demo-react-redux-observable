import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import {
  regions,
  departements,
} from './reducers';
import {
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
} from './epics';

export const rootEpic = combineEpics(
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
);

export const rootReducer = combineReducers({
  regions,
  departements,
});
