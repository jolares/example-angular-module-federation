import { AppComponent } from '../app/app.component';

export const environment = {
  production: true,
  customElement: false,
  remoteRoutes: [
    {
      path: 'mf1-routes',
      loadChildren: () => import('mf1/Module').then(module => module.AppModule)
    }
  ]
};
