// @Vendors
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// @Constants
import ErrorsKeys from '../constants/ErrorsKeys';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // GOOGLE AUTOCOMPLETE
  googleAutocompleteRequest: ['input', 'language', 'location'],
  googleAutocompleteSuccess: ['response'],
  googleAutocompleteFailure: ['response'],
  // GOOGLE DIRECTIONS
  googleDirectionsRequest: ['origin', 'destination'],
  googleDirectionsSuccess: ['response'],
  googleDirectionsFailure: ['response'],
  // SET USER LOCATION
  setUserLocation: ['cords'],
  // RESET PREDICTIONS
  resetPredictions: null
});

export const GoogleTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  errorMessage: '',
  fetching: false,
  predictions: [],
  routes: [],
  userLocation: [0, 0]
});

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({
    errorMessage: '',
    fetching: true
  });

export const googleAutocompleteRequest = (state) =>
  state.merge({
    errorMessage: ''
  });

export const googleAutocompleteSuccess = (state, { response }) =>
  state.merge({
    errorMessage: '',
    fetching: false,
    predictions: response.predictions
  });

export const googleDirectionsSuccess = (state, { response }) =>
  state.merge({
    errorMessage: '',
    fetching: false,
    routes: response.routes
  });

export const failure = (state, { response }) => {
  console.log(response);
  return state.merge({
    errorMessage: ErrorsKeys[response] || ErrorsKeys.DEFAULT_MESSAGE,
    fetching: false,
    predictions: [],
    routes: []
  });
}

export const setUserLocation = (state, { cords }) =>
  state.merge({
    userLocation: cords
  });

export const resetPredictions = state =>
  state.merge({
    predictions: []
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  // GOOGLE AUTOCOMPLETE
  [Types.GOOGLE_AUTOCOMPLETE_REQUEST]: googleAutocompleteRequest,
  [Types.GOOGLE_AUTOCOMPLETE_SUCCESS]: googleAutocompleteSuccess,
  [Types.GOOGLE_AUTOCOMPLETE_FAILURE]: failure,
  // GOOGLE DIRECTIONS
  [Types.GOOGLE_DIRECTIONS_REQUEST]: request,
  [Types.GOOGLE_DIRECTIONS_SUCCESS]: googleDirectionsSuccess,
  [Types.GOOGLE_DIRECTIONS_FAILURE]: failure,
  // SET USER LOCATION
  [Types.SET_USER_LOCATION]: setUserLocation,
  // RESET PREDICTIONS
  [Types.RESET_PREDICTIONS]: resetPredictions
});
