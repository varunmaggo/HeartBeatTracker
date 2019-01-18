import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { HeartRateListComponent } from './heartrate-list/heartrate-list.component';
import { HeartRateEditComponent } from './heartrate-edit/heartrate-edit.component';
import HeartRateService from './shared/api/heartrate.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sugarlevel-list', pathMatch: 'full' },
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeartRateListComponent,
    HeartRateEditComponent
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
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [HeartRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
