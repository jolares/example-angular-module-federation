import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Feature1Component } from './modules/feature1/feature1.component';
import { Feature2Component } from './modules/feature2/feature2.component';
import { Feature3Component } from './modules/feature3/feature3.component';


export const APP_ROUTES: Routes = [
	{ path: 'mf1-routes', redirectTo: 'app-component', pathMatch: 'full'},
	{ path: 'feature-1', component: Feature1Component, pathMatch: 'full'},
	{ path: 'feature-2', component: Feature2Component, pathMatch: 'full'},
	{ path: 'feature-3-routes', component: Feature3Component, pathMatch: 'full'},
	{ path: 'app-component', component: AppComponent, pathMatch: 'full'},

];
