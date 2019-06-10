import * as AuthActions from './auth.action';
import { authModel } from 'src/app/shared/models/common.model';

const initialState: authModel = {
  token: localStorage.token == undefined ? null : localStorage.token,
  authenticated: localStorage.authenticated == undefined ? false : true,
  user: localStorage.user == undefined ? null : JSON.parse(window.localStorage.getItem('user'))
};

export function authRedcuer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        token: action.token,
        authenticated: true,
        user: action.payload
      };

    case AuthActions.LOGOUT:
      return { token: null, authenticated: false, user: null };

    default:
      return state;
  }
}
