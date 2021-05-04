// @Vendors
import { combineReducers } from 'redux';

import { reducer } from './GoogleRedux';

// @Store
import configureStore from './Store';

// @Sagas
import rootSaga from '../sagas';

const rootReducer = combineReducers({
  google: reducer
});

const store = configureStore(rootReducer, rootSaga);

export default store;
