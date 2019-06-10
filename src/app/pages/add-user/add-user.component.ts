import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  user:UserModel= {}
  constructor(private userService:UserService,
              private notification:NotificationService) { }

  ngOnInit() {
  }

  createUser(){
    this.userService.createUser(this.user).subscribe(response=>{
      this.notification.notify("User Created Successfully");
    },error=>{
      this.notification.notify(error.msg);
    });
  }

  canAddUser(){
    let canAdd = true;
    if(!this.user.name || !this.user.email){
      canAdd= true;
    }else{
      canAdd= false;
    }
    
    console.log(canAdd);
  }

}
