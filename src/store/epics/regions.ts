import { from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { FETCH_REGIONS, fetchRegionsSuccess } from '../actions';
import { Api } from 'core';
import { Region } from '../../types';

const getAllRegionsEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_REGIONS),
    mergeMap(() =>
      fromFetch(Api.getAllRegionsUrl()).pipe(
        mergeMap(response => {
          const resp: Promise<Region[]> = response.json();
          return from(resp);
        })
      )
    ),
    map((regions: Region[]) => {
      return fetchRegionsSuccess(regions);
    })
  );

export { getAllRegionsEpic };
