import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  FETCH_REGIONS,
  fetchRegionsSuccess,
} from '../actions';
import { Api } from '../../core';
import { Region } from '../../types';

const getAllRegionsEpic = (action$: any) => action$.pipe(
  ofType(FETCH_REGIONS),
  fromFetch(Api.getAllRegionsUrl()).pipe(
    switchMap(response => {
      const resp: Promise<Region[]> = response.json()
      return resp
      // fetchRegionsSuccess(resp)
    })
  )
)

export {
  getAllRegionsEpic,
}
