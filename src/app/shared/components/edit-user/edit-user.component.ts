import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { MAT_DIALOG_DATA, MatDialogRef, ErrorStateMatcher } from '@angular/material';
import { UserService } from '../../services/user/user.service';
import { FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:UserModel={};
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(public dialogRef: MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: UserModel,private userService:UserService) {

   }

  ngOnInit() {
    this.user = this.data;
  }

  editUser(user){
    this.userService.editUser(user).subscribe(response=>{
      this.dialogRef.close(true);
    },error=>{
      this.dialogRef.close(false);
    });
  }

}
