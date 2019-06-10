import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { EditUserComponent } from 'src/app/shared/components/edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:UserModel[]=[];
  displayedColumns: string[] = ['name', 'userName', 'email','userType','edit','delete'];
  constructor(private userService:UserService,public dialog: MatDialog,private spinner:NgxSpinnerService, private notification:NotificationService) {
    
   }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.spinner.show();
    this.userService.getUsers().subscribe(data=>{
      if(data!=null){
        // debugger;
        this.spinner.hide();
        this.users = data['docs'];
      }
    },error=>{
      this.spinner.hide();
    });
  }

  deleteUser(user:UserModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(
      ConfirmationDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.spinner.show();
        this.userService.deleteUser(user._id).subscribe(response=>{
          this.spinner.hide();
          this.notification.notify("User Deleted Successfully");
          this.getUsers();
        },error=>{
          this.spinner.hide();
          this.notification.notify(error.msg);
        });
      }
    });
  }

  editUser(user:UserModel){
    const dialogRef = this.dialog.open(EditUserComponent,{data:user});
    dialogRef.afterClosed().subscribe(result=>{
      if(result==true){
        this.notification.notify("User Details Updated Successfully");
        this.getUsers();
      }
    });
  }


}
