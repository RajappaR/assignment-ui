// import { UserPermission } from "./user.permission.model";

export interface UserModel {
  _id?: string;
  createdOn?: string;
  name?: string;
  username?:String;
  email?: string;
  userType?:string;
  status?: string;
  token?:string,
}

export interface LifeCycle {
  createdOn?:string,
  msg?:string,
  user?:any
}