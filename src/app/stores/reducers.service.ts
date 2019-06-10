import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app-reducers";
import { UserModel } from "../shared/models/user.model";
import * as AuthActions from "./auth-reducer/auth.action";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ReducersService {
  constructor(private store: Store<AppState>) {}

  // Auth related state

  getAuthState() {
    return this.store.select("authReducer");
  }
  isAuth() {
    let flag = false;
    this.store.select("authReducer").subscribe(state => {
      flag = state.authenticated;
    });
    return flag;
  }

  updateAuthState(token: string, user: UserModel) {
    this.store.dispatch(new AuthActions.Login(token, user));
  }

  clearAuthState() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
