import { combineReducers } from 'redux';

import home, { HomeState } from 'modules/home/home.reducer';
import auth, { AuthenticationState } from './authentication';

export interface IRootState {
  readonly home: HomeState;
  readonly auth: AuthenticationState;
}

const rootReducer = combineReducers<IRootState>({
  home,
  auth,
});

export default rootReducer;
