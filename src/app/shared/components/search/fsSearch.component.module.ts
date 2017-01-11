import { NgModule } from '@angular/core';
import { FsSearchComponent } from './fsSearch.component';

/**
 * FsSearch Componentent Module, Components must be imported inside a module when you use lazy load modules
 */
@NgModule({
  declarations: [
    FsSearchComponent
  ],
  exports: [
    FsSearchComponent
  ]
})

export class FsSearchComponentModule { }
