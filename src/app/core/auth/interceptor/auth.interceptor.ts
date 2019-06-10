import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReducersService } from 'src/app/stores/reducers.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private reducerService: ReducersService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (localStorage.token) {
      let token = localStorage.getItem('token');
     
      if (token) {
        const headers= {};
        headers['Authorization'] = `Bearer ${token}`;
        headers['Content-type'] = 'application/json';
        request = request.clone({
          setHeaders: headers
        });
      }
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
