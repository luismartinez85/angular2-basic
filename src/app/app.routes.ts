import { Routes } from '@angular/router';
import { AuthenticateGuard } from './shared/services/authenticateGuard/auth.service';
import { NoContentComponent } from './shared/components/no-content/noContent.component';

import { ROUTES_CONSTANTS } from './shared/constants/routes/routes.constants';

export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthenticateGuard],
    canLoad: [AuthenticateGuard],
    loadChildren: './modules/+home/home.module#HomeModule'
  },
  {
    path: ROUTES_CONSTANTS.HOME.path,
    canActivate: [AuthenticateGuard],
    canLoad: [AuthenticateGuard],
    loadChildren: './modules/+home/home.module#HomeModule'
  },
  {
    path: ROUTES_CONSTANTS.ABOUT_US.path,
    canActivate: [AuthenticateGuard],
    canLoad: [AuthenticateGuard],
    loadChildren: './modules/+about/about.module#AboutModule'
  },
  {
    path:ROUTES_CONSTANTS.NO_CONTENT.path,
    component: NoContentComponent
  }
];
