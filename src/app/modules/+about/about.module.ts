import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './about.routes';

import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';
import { AboutComponent } from './components/about/about.component';
import { FsUsersComponent } from './components/fs-users/fs-users.component';
import { FsDialogComponent } from '../../shared/components/fs-dialog';
import { FsTwitterAPIComponent } from '../../shared/components/fs-twitter-api';
import { fsYoutubeApiPipeFilterSearch, FsYoutubeDialog, FsYoutubeAPIComponent } from '../../shared/components/fs-youtube-api';


@NgModule({
  declarations: [
    AboutComponent,
    FsDialogComponent,
    FsYoutubeAPIComponent,
    FsTwitterAPIComponent,
    fsYoutubeApiPipeFilterSearch,
    FsUsersComponent,
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

export class AboutModule {
  static routes = routes;
}
