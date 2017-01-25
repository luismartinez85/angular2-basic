import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageListComponent } from './image-list.component';

/**
 * Image List Module, must be imported inside a module when you use lazy load modules
 */
@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageListComponent
  ]
})

export class ImageListModule { }
