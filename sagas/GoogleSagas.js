// @Vendors
import { call, put } from 'redux-saga/effects';

// @Actions
import GoogleActions from '../redux/GoogleRedux';

export function* googleAutocomplete(api, { input, language, location }) {
  const response = yield call(api.googleAutocomplete, { input, language, location });

  if (response.ok && response.data.status === 'OK') {
    yield put(GoogleActions.googleAutocompleteSuccess(response.data));
  } else {
    yield put(GoogleActions.googleAutocompleteFailure(response.data.status));
  }
}

export function* googleDirections(api, { origin, destination }) {
  const response = yield call(api.googleDirections, { origin, destination });

  if (response.ok) {
    yield put(GoogleActions.googleDirectionsSuccess(response.data));
  } else {
    console.log(response);
    yield put(GoogleActions.googleDirectionsFailure(response));
  }
}
