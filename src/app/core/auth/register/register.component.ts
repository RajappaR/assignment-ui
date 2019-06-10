import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { NotificationService } from "src/app/shared/services/notification/notification.service";
import { Observable } from "rxjs";
import { MatDialogRef } from "@angular/material";
import { FormControl } from "@angular/forms";
import { ReducersService } from "src/app/stores/reducers.service";
import { startWith, map } from "rxjs/operators";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  user: any = {};
  vehicles: any = [];
  isPhoneValid: boolean = false;
  myControl = new FormControl();
  filteredOptions: Observable<any>;

  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private reducerService: ReducersService
  ) {}
  ngOnInit() {
  }


  ngOnDestroy() {}
}
