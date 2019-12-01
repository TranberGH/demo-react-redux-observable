import { from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  FETCH_DEPARTEMENTS,
  fetchDepartementsSuccess,
} from '../actions';

import {
  getDepartementsByRegion,
  hasDepartementsForRegion,
} from '../selectors';

import { Api } from '../../core';
import { Departement, FSAction } from '../../types';

const getDepartementsByRegionEpic = (action$: any, state$: any) => action$.pipe(
  ofType(FETCH_DEPARTEMENTS),
  mergeMap((action: FSAction) => {
    const canFetch = !hasDepartementsForRegion(action.payload, state$.value);
    // console.log('can fetch : ', canFetch, action.payload, state$.value)
    if (canFetch) {
      return fromFetch(Api.getDepartementsByRegionUrl(action.payload)).pipe(
        mergeMap(response => {
          const resp: Promise<Departement[]> = response.json()
          return from(resp)
        })
      )
    }
    // console.log('dept : ', getDepartementsByRegion(state$.value))
    return from<Departement[]>(getDepartementsByRegion(state$.value))
  }),
  map((departements: Departement[]) => {
    return fetchDepartementsSuccess({ region: state$.value.departements.region, departements })
  })
)

export {
  getDepartementsByRegionEpic,
}
