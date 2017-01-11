import { AboutMainComponent } from './components/about-main/about-main.component';

/**
 * Child routes for About Module Lazy Load. Keep in mind that this routes are CHILD routes,
 * this means that routes defined here begins with /about which is defined in app.routes.ts
 * path: '' -> correspond with yourdomain.com/#/about (default route)
 * path: 'whatever' -> correspond with yourdomain.com/#/about/whatever
 */
export const routes = [
  { path: '', component: AboutMainComponent }
];
