import { combineReducers } from 'redux-immutable';

import usersReducer from './containers/Users/reducer';

export interface State {
  usersDomain: any;
}

export const rootReducer = combineReducers({
  usersDomain: usersReducer
});
