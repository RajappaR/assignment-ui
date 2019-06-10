import * as fromAuth from './auth-reducer/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { authModel } from '../shared/models/common.model';

export interface AppState {
  authReducer: authModel;
}

export const reducers: ActionReducerMap<AppState> = {
  authReducer: fromAuth.authRedcuer
};
