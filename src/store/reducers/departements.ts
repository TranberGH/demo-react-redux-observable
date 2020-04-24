import {
  FETCH_DEPARTEMENTS,
  FETCH_DEPARTEMENTS_SUCCESS,
  FETCH_DEPARTEMENTS_ERROR
} from '../actions';

function getDefaultState() {
  return {
    region: null,
    departements: {},
    error: null
  };
}

function departements(state = getDefaultState(), action: any) {
  switch (action.type) {
    case FETCH_DEPARTEMENTS:
      return Object.assign({}, state, { region: action.payload });
    case FETCH_DEPARTEMENTS_SUCCESS:
      const departements = Object.assign({}, state.departements, {
        [action.payload.region]: action.payload.departements
      });
      return Object.assign({}, state, { departements });
    case FETCH_DEPARTEMENTS_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

export { departements };
