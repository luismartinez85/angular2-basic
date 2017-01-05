import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';

import { routes } from './about.routes';

import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutYoutubeComponent } from './components/about-youtube/about-youtube.component';
import { AboutYoutubeModal } from './components/about-youtube-modal/about-youtube-modal.component';

@NgModule({
  declarations: [
    AboutYoutubeComponent,
    AboutMainComponent,
    AboutTeamComponent,
    AboutYoutubeModal
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    TranslateModule.forRoot()
  ],
  entryComponents : [
    AboutYoutubeModal
  ]
})

export class AboutModule { }
