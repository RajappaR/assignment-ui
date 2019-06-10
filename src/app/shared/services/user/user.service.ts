import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(){
    return this.httpClient.get(environment.apiUrl+environment.userUrl.getusers);
  }

  createUser(payload){
    return this.httpClient.post(environment.apiUrl+environment.userUrl.createusers,payload);
  }

  deleteUser(userId){
    return this.httpClient.delete(environment.apiUrl+environment.userUrl.deleteUser+userId);
  }

  editUser(payload){
    return this.httpClient.put(environment.apiUrl+environment.userUrl.editUser+payload._id,payload);
  }
}
