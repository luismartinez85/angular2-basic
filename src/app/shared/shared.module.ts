import { NgModule } from '@angular/core';

import { SearchPipe } from './pipes';

@NgModule({
  declarations: [
    SearchPipe
  ],
  exports: [ 
    SearchPipe
  ]
})

export class SharedModule { }
