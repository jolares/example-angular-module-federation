import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Feature1Component } from './modules/feature1/feature1.component';
import { Feature2Component } from './modules/feature2/feature2.component';
import { Feature3Component } from './modules/feature3/feature3.component';


export const APP_ROUTES: Routes = [
	{ path: '', component: AppComponent, pathMatch: 'full'},

];
