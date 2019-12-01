import { from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  FETCH_CITIES,
  fetchCitiesSuccess,
} from '../actions';

import { Api } from '../../core';
import { City, FSAction } from '../../types';

const getCitiesByDepartementEpic = (action$: any, state$: any) => action$.pipe(
  ofType(FETCH_CITIES),
  mergeMap((action: FSAction) => fromFetch(Api.getCitiesByDepartementUrl(action.payload)).pipe(
      mergeMap(response => {
        const resp: Promise<City[]> = response.json()
        return from(resp)
      })
    )
  ),
  map((cities: City[]) => {
    return fetchCitiesSuccess({ departement: state$.value.cities.departement, cities })
  })
)

export {
  getCitiesByDepartementEpic,
}
