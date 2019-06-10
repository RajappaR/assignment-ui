import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AppState } from '../../stores/app-reducers';
import {authModel} from '../../shared/models/common.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private store: Store<AppState>) {}

  signInWithEmailAndPassword(username: string, password: string) {
    return this.httpClient
      .post<authModel>(environment.apiUrl + environment.userUrl.login, {user:{
        userName: username,
        password: password
      }});
  }

  
}
