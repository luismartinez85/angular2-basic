import { CommonModule } from '@angular/common';
import 'hammerjs';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExponentialStrengthPipe } from '../../shared/pipes';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeTechnologiesComponent } from './components/home-technologies/home-technologies.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFeatureModal } from './components/home-feature-modal/home-feature-modal.component';

import { routes } from './home.routes';
import  { ShellModule } from '../../shell';
// Import material design module
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    HomeMainComponent,
    ExponentialStrengthPipe,
    HomeTechnologiesComponent,
    HomeFeaturesComponent,
    HomeFeatureModal
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    TranslateModule.forRoot()

  ],
  entryComponents : [
    HomeFeatureModal
  ]
})

export class HomeModule { }
