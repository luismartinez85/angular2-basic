import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { HomeMainComponent } from './components/home-main/home-main.component';
import { ImageListComponent } from '../../shared';
import { HomeLogoComponent } from './components/home-logo/home-logo.component';
import { SearchPipeModule } from '../../shared';

import { routes } from './home.routes';

@NgModule({
  declarations: [
    HomeMainComponent,
    ImageListComponent,
    HomeLogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot(),
    SearchPipeModule
  ]
})

export class HomeModule { }
