import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "./error-component/error.component";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandlerInterceptor } from "./error-interceptor/error-interceptor";

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ]
})
export class ErrorsModule {}
