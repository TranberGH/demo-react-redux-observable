import { from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  FETCH_DEPARTEMENTS,
  fetchDepartementsSuccess,
} from '../actions';

import { Api } from '../../core';
import { Departement, FSAction } from '../../types';

const getDepartementsByRegionEpic = (action$: any) => action$.pipe(
  ofType(FETCH_DEPARTEMENTS),
  mergeMap((action: FSAction) => fromFetch(Api.getDepartementsByRegionUrl(action.payload)).pipe(
      mergeMap(response => {
        console.log('action epic : ', action)
        const resp: Promise<Departement[]> = response.json()
        return from(resp)
      })
    )
  ),
  map((departements: Departement[]) => {
    console.log('action end : ', action$)
    return fetchDepartementsSuccess(departements)
  })
)

export {
  getDepartementsByRegionEpic,
}
