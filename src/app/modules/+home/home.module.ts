import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeTechnologiesComponent } from './components/home-technologies/home-technologies.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFeatureModal } from './components/home-feature-modal/home-feature-modal.component';
import { HomeLogoComponent } from './components/home-logo/home-logo.component';
import { SearchPipeModule } from '../../shared';

import { routes } from './home.routes';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeTechnologiesComponent,
    HomeFeaturesComponent,
    HomeFeatureModal,
    HomeLogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    TranslateModule.forRoot(),
    SearchPipeModule
  ],
  entryComponents : [
    HomeFeatureModal
  ]
})

export class HomeModule { }
