import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [EditUserComponent, ConfirmationDialogComponent],
  imports: [CommonModule, MaterialModule,FormsModule,MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule],
  exports: [EditUserComponent,ConfirmationDialogComponent],
  entryComponents: [EditUserComponent,ConfirmationDialogComponent]
})
export class SharedModule {}
