import {
  SEARCH_CITIES,
  SEARCH_CITIES_SUCCESS,
  SEARCH_CITIES_ERROR
} from '../actions';

function getDefaultState() {
  return {
    result: [],
    search: '',
    error: null
  };
}

function search(state = getDefaultState(), action: any) {
  switch (action.type) {
    case SEARCH_CITIES:
      return Object.assign({}, state, { search: action.payload });
    case SEARCH_CITIES_SUCCESS:
      return Object.assign({}, state, { result: action.payload });
    case SEARCH_CITIES_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export { search };
