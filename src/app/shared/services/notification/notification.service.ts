import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  async notify(message: string) {
    await this.snackBar.open(message, null, {
      duration: 3000
    });
  }
}
