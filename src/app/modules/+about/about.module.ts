import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { routes } from './about.routes';

import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutYoutubeComponent } from './components/about-youtube/about-youtube.component';
import { SearchPipeModule, SafePipeModule, ImageListModule } from '../../shared';

/**
 * About Module is a Lazy Load module, which show team a our social networks as youtube.
 */
@NgModule({
  declarations: [
    AboutYoutubeComponent,
    AboutMainComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot(),
    ImageListModule,
    SearchPipeModule,
    SafePipeModule
  ]
})

export class AboutModule { }
