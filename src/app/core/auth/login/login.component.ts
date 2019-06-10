import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { ReducersService } from 'src/app/stores/reducers.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 user: any = {};
 OTP: boolean = false;
 baseUrl: string;

 constructor(
   // private dialogRef: MatDialogRef<LoginComponent>,
   private authService: AuthService,
   private notification: NotificationService,
   private router: Router,
   private reducerService: ReducersService
 ) // private dialog: MatDialog
 { }

 ngOnInit() {
   let url = environment.apiUrl;
   let urlTag = document.createElement('a');
   urlTag.href = url;
 }

 doLogin() {
   this.authService
     .signInWithEmailAndPassword(this.user.username, this.user.password)
     .subscribe(result => {
       if (result == null) {
         this.notification.notify(`Wrong Credentials`);
       } else {
         this.setLoginDetails(result);
         this.reducerService.updateAuthState(result['user']['token'], result['user']);
         this.notification.notify('Signed In Successfully');
         this.router.navigate(['/users']);
       }
     });
 }

 setLoginDetails(loginResponse){
   localStorage.setItem('authenticated', 'true');
   localStorage.setItem('config', JSON.stringify(loginResponse['config']));
   localStorage.setItem('user', JSON.stringify(loginResponse['user']));
   localStorage.setItem('token', loginResponse['user']['token']);
 }
}