import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { routes } from './about.routes';

import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';
import { AboutComponent } from './components/about/about.component';
import { FsUsersComponent } from './components/fs-users/fs-users.component';
import { FsDialogComponent } from '../../shared/components/fs-dialog';
import { FsYoutubeAPIComponent } from '../../shared/components/fs-youtube-api';
import { fsYoutubeApiPipeFilterSearch } from '../../shared/components/fs-youtube-api';
import { FsTwitterAPIComponent } from '../../shared/components/fs-twitter-api';
import { fsYoutubeApiPipeFilterSearch, FsYoutubeDialog } from '../../shared/components/fs-youtube-api'; // import our pipe here


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
    // FormsModule
    // BrowserModule,
  ],
  entryComponents : [
    FsYoutubeDialog
  ]

})

export class AboutModule {
  static routes = routes;
}
