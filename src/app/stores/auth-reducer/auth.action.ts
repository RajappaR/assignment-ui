import { Action } from "@ngrx/store";
import { UserModel } from "src/app/shared/models/user.model";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public token: string, public payload: UserModel) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login | Logout;
