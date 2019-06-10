import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/modules/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { UsersComponent } from './users/users.component';
import { SharedModule } from "../shared/shared.module";
import { AddUserComponent } from './add-user/add-user.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [ UsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    SharedModule
  ]
})
export class HomeModule {}
