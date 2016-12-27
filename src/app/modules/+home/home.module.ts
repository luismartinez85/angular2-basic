import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExponentialStrengthPipe } from '../../shared/pipes';
import { HomeComponent } from './components/home/home.component';
import { GridCardsComponent } from './components/gridCards/gridCards.component';
import { CustomGridCardsComponent } from './components/customGridCards/customGridCards.component';
import { CustomModal } from './components/customModal/customModal.component';

import { routes } from './home.routes';
import  { ShellModule } from '../../shell';
// Import material design module
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    HomeComponent,
    ExponentialStrengthPipe,
    GridCardsComponent,
    CustomGridCardsComponent,
    CustomModal
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    TranslateModule.forRoot()

  ],
  entryComponents : [
    CustomModal
  ]
})

export class HomeModule { }
