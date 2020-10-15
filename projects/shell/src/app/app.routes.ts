import { Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { Feature1Component } from './feature1/feature1.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: Feature1Component,
    pathMatch: 'full'
  },
  ...environment.remoteRoutes
];

