import { fromFetch } from 'rxjs/fetch';
import { filter } from 'rxjs/operators';
import { ActionsObservable } from 'redux-observable';

import { FETCH_REGIONS } from '../actions';

const getAllRegionsEpic = (action$: any) => action$.pipe(
  filter((action: any) => action.type === FETCH_REGIONS)
)

export {
  getAllRegionsEpic,
}
