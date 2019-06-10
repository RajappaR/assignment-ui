import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { NotificationService } from "src/app/shared/services/notification/notification.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private notification: NotificationService,
    private injector: Injector,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (error: any) => {
          const router = this.injector.get(Router);

          if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
              // No Internet connection
              this.notification.notify("No Internet Connection");
            } else {
              // Show server side error to the user
              if (error.error.length != undefined) {
                this.notification.notify(`${error.error[0].msg}`);
              } else if(error.error != undefined && error.error.msg != undefined) {
                this.notification.notify(`${error.error.msg}`);
              }
            }
          } else {
            // Angular error or client side errors
            // send error to error page
            // router.navigate(["/error"]);
            debugger;
            console.log(error.message);
          }
        }
      )
    );
  }
}
