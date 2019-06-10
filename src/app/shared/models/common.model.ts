import { UserModel } from "./user.model";

export interface authModel {
  token: string;
  authenticated: boolean;
  user: UserModel;
}
