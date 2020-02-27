import {
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR
} from '../actions';

function getDefaultState() {
  return {
    departement: null,
    cities: {},
    error: null
  };
}

function cities(state = getDefaultState(), action: any) {
  switch (action.type) {
    case FETCH_CITIES:
      return Object.assign({}, state, { departement: action.payload });
    case FETCH_CITIES_SUCCESS:
      const cities = Object.assign({}, state.cities, {
        [action.payload.departement]: action.payload.cities
      });
      return Object.assign({}, state, { cities });
    case FETCH_CITIES_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export { cities };
