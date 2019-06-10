import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/modules/material.module';
import { ErrorsModule } from './core/errors/errors.module';
import { HomeModule } from './pages/home.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './stores/app-reducers';
import { AuthGuard } from './core/auth/guard/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { JwtInterceptor } from './core/auth/interceptor/auth.interceptor';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
// import { EditAddressComponent } from './shared/components/edit-address/edit-address.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxSpinnerModule } from 'ngx-spinner';

//create our cost var with the information about the format that we want
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule,
    ErrorsModule,
    LayoutModule,
    HttpClientModule,
    HomeModule,
    NgxMaterialTimepickerModule,
    NgxSpinnerModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot(reducers),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'in' }, //you can change useValue
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
