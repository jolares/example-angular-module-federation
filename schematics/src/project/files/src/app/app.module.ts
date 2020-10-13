import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { APP_ROUTES } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(APP_ROUTES),
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
