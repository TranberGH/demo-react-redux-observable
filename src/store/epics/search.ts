import { from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { SEARCH_CITIES, searchCitiesSuccess } from '../actions';
import { Api } from '../../core';
import { City } from '../../types';

const getCitiesEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType(SEARCH_CITIES),
    mergeMap(() =>
      fromFetch(Api.searchUrl(state$.value.search.search)).pipe(
        mergeMap(response => {
          // const resp: Promise<Partial<City[]>> = response.json()
          return from(response.json());
        })
      )
    ),
    map((cities: any) => {
      // Partial<City[]>
      console.log('search cities : ', cities);
      return searchCitiesSuccess(cities.features);
    })
  );

export { getCitiesEpic };
