import { fromFetch } from 'rxjs/fetch';
import { filter, map } from 'rxjs/operators';
// import { ActionsObservable } from 'redux-observable';

import {
  FETCH_REGIONS,
  fetchRegionsSuccess,
} from '../actions';
import { Api } from '../../core';
import { FSAction } from '../../types';

const getAllRegionsEpic = (action$: any) => action$.pipe(
  filter((action: FSAction) => action.type === FETCH_REGIONS),
  fromFetch(Api.getAllRegionsUrl()).pipe(
    map(response => fetchRegionsSuccess(response.json()))
  )
)

export {
  getAllRegionsEpic,
}
