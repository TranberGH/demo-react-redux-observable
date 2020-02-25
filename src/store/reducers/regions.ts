import { FETCH_REGIONS_SUCCESS, FETCH_REGIONS_ERROR } from '../actions';

let regionsState = {
  regions: [],
  error: null
};

function regions(state = regionsState, action: any) {
  switch (action.type) {
    case FETCH_REGIONS_SUCCESS:
      return Object.assign({}, state, { regions: action.payload });
    case FETCH_REGIONS_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export { regions };
