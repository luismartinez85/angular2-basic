import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';

import { routes } from './about.routes';

import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';

import { FsTwitterAPIComponent } from './components/about-twitter';
import { fsYoutubeApiPipeFilterSearch, FsYoutubeAPIComponent } from './components/about-youtube';
import { FsYoutubeDialog } from './components/about-youtube-modal/fs-youtube-api-dialog.component';


@NgModule({
  declarations: [
    FsYoutubeAPIComponent,
    FsTwitterAPIComponent,
    fsYoutubeApiPipeFilterSearch,
    AboutMainComponent,
    AboutTeamComponent,
    FsYoutubeDialog
  ],
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
    TranslateModule.forRoot()
  ],
  entryComponents : [
    FsYoutubeDialog
  ]
})

export class AboutModule { }
