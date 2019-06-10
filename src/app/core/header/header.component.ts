import { Component, OnInit, Output, Inject, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginComponent } from '../auth/login/login.component';
import { UserModel } from 'src/app/shared/models/user.model';
import { ReducersService } from 'src/app/stores/reducers.service';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { authModel } from 'src/app/shared/models/common.model';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel;
  authState: Observable<authModel>;
  isHandset$: Observable<boolean> = this.commonService.getBreakpointObserver();
  @Output() toggleDrawer = new EventEmitter<boolean>();
  flag: boolean;

  constructor(
    private commonService: CommonService,
    private dialog: MatDialog,
    private reducerService: ReducersService,
    private router: Router,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.authState = this.reducerService.getAuthState();
  }

  toggle() {
    this.toggleDrawer.emit(true);
  }



  logout() {
    localStorage.clear();
    this.reducerService.clearAuthState();
    this.router.navigate(['/login']);
    this.notification.notify('Logged Out Successfully');

  }
}




