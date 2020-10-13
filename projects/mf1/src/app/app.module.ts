import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { Feature1Component } from './modules/feature1/feature1.component';
import { Feature2Component } from './modules/feature2/feature2.component';

import { Feature3Module } from './modules/feature3/feature3.module';

import { APP_ROUTES } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    Feature3Module,
    RouterModule.forRoot(APP_ROUTES),
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
