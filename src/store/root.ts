import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { regions } from './reducers';
import { getAllRegionsEpic } from './epics';

export const rootEpic = combineEpics(
  getAllRegionsEpic,
);

export const rootReducer = combineReducers({
  regions,
});
