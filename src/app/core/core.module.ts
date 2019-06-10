import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  entryComponents: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class CoreModule {}
