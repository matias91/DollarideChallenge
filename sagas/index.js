// @Vendors
import { all, takeLatest } from 'redux-saga/effects';

/* --- Types --- */
import { GoogleTypes } from '../redux/GoogleRedux';

/* --- Sagas --- */
import { googleAutocomplete, googleDirections } from './GoogleSagas';

/* --- API --- */
import API from '../services/Api';

const api = API.create();

/* --- Connect Types To Sagas --- */

export default function* root() {
  try {
    yield all([
      // GOOGLE
      takeLatest(GoogleTypes.GOOGLE_AUTOCOMPLETE_REQUEST, googleAutocomplete, api),
      takeLatest(GoogleTypes.GOOGLE_DIRECTIONS_REQUEST, googleDirections, api)
    ]);
  } catch (err) {
    console.log(err);
  }
}
