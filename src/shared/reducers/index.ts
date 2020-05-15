import { combineReducers } from 'redux';

import home, { HomeState } from 'modules/home/home.reducer';
import locale, { LocaleState } from './locale';
import auth, { AuthenticationState } from './authentication';

export interface IRootState {
  readonly locale: LocaleState;
  readonly home: HomeState;
  readonly auth: AuthenticationState;
}

const rootReducer = combineReducers<IRootState>({
  locale,
  home,
  auth,
});

export default rootReducer;
