// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2

import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Rx';
import 'hammerjs';

// angular Material
import '@angular/material';
// ng2-translate
import 'ng2-translate';

if ('production' === ENV) {
  // Production
  require('offline-plugin/runtime').install();

} else {
  // Development

}
