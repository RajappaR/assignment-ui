import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ReducersService } from 'src/app/stores/reducers.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private reducersService: ReducersService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.reducersService.isAuth()) {
      this.route.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}