import { CommonModule } from '@angular/common';
import 'hammerjs';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { ExponentialStrengthPipe } from '../../shared/pipes';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeTechnologiesComponent } from './components/home-technologies/home-technologies.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFeatureModal } from './components/home-feature-modal/home-feature-modal.component';
import { HomeLogoComponent } from './components/home-logo/home-logo.component';

import { routes } from './home.routes';
import  { ShellModule } from '../../shell';

import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    HomeMainComponent,
    ExponentialStrengthPipe,
    HomeTechnologiesComponent,
    HomeFeaturesComponent,
    HomeFeatureModal,
    HomeLogoComponent
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
