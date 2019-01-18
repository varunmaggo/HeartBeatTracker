import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

import { HeartRateListComponent } from './heartrate-list/heartrate-list.component';
import { HeartRateEditComponent } from './heartrate-edit/heartrate-edit.component';
import HeartRateService from './shared/api/heartrate.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sugarlevel-list',
    component: HeartRateListComponent
  },
  {
    path: 'sugarlevel-add',
    component: HeartRateEditComponent
  },
  {
    path: 'sugarlevel-edit/:id',
    component: HeartRateEditComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

const config = {
  issuer: 'https://dev-499456.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaj19zi2sal7JHyA0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    HeartRateListComponent,
    HeartRateEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    HeartRateService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
