import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { Feature1Component } from './feature1/feature1.component';
import { APP_ROUTES } from './app.routes';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    Feature1Component
  ],
  providers: [],
  bootstrap: environment.customElement ? [] : [AppComponent],
  entryComponents: environment.customElement ? [AppComponent] : []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!environment.customElement) {
      const elem = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('shell-element', elem);
    }
  }
}
