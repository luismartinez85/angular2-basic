/*
 * Angular bootstraping
 */
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';
import { decorateModuleRef } from './app/app.environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .then(decorateModuleRef)
  .catch(err => console.error(err));
