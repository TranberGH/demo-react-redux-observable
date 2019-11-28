import {
  FETCH_DEPARTEMENTS_SUCCESS,
  FETCH_DEPARTEMENTS_ERROR,
} from '../actions';

let departementsState = {
  departements: [],
  error: null,
}

function departements(state = departementsState, action: any) {
  switch(action.type) {
    case FETCH_DEPARTEMENTS_SUCCESS:
      return Object.assign({}, state, { departements: action.payload});
    case FETCH_DEPARTEMENTS_ERROR:
      return Object.assign({}, state, { error: action.payload});
    default:
      return state;
  }
}

export {
  departements,
}
