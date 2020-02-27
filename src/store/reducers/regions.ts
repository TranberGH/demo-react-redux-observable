import { FETCH_REGIONS_SUCCESS, FETCH_REGIONS_ERROR } from '../actions';

function getDefaultState() {
  return {
    regions: [],
    error: null
  };
}

function regions(state = getDefaultState(), action: any) {
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
