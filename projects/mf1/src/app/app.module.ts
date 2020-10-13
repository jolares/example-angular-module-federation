import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Feature1Component } from './modules/feature1/feature1.component';
import { Feature2Component } from './modules/feature2/feature2.component';

import { Feature3Module } from './modules/feature3/feature3.module';

import { APP_ROUTES } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    MatSidenavModule,
    Feature3Module,
    // RouterModule.forRoot(APP_ROUTES),
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    Feature1Component,
    Feature2Component,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
