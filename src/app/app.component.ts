import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { CommonService } from './shared/services/common/common.service';
import { ReducersService } from './stores/reducers.service';
import { authModel } from './shared/models/common.model';
import { MatSidenav } from '@angular/material';
import { NotificationService } from "src/app/shared/services/notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.commonService.getBreakpointObserver();
  authState: Observable<authModel>;
  openedDrawer: boolean = false;
  
  deferredPrompt: any;
  showButton = false;
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];
  // pageLoad: NodeJS.Timer;


  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  constructor(
    private commonService: CommonService,
    private notification: NotificationService,
    private reducerService: ReducersService
  ) {

    if ('serviceWorker' in navigator) {
      console.log("Will the service worker register?");
      navigator.serviceWorker.register('service-worker.js')
        .then(function(reg){
          console.log("Yes, it did.");
        }).catch(function(err) {
          console.log("No it didn't. This happened: ", err)
        });
    }
  }
  ngOnInit() {
    this.authState = this.reducerService.getAuthState();

      /**
    * Get the online/offline status from browser window
    */
   this.onlineEvent = fromEvent(window, 'online');
   this.offlineEvent = fromEvent(window, 'offline');

   this.subscriptions.push(this.onlineEvent.subscribe(e => {
              this.notification.notify("Back online");
              console.log('Online...');
   }));

   this.subscriptions.push(this.offlineEvent.subscribe(e => {
              this.notification.notify("No Internet Connection");
              console.log('Offline...');
   }));

  //  this.pageLoad = setTimeout(() => {
  //    this.notification.notify("Slow Internet Connection");
  //  }, 100);

  }

  ngAfterViewInit(){
    // clearTimeout(this.pageLoad)
  }

  openDrawer() {
    this.openedDrawer = !this.openedDrawer
  }

  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }

  

}
