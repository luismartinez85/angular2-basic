import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { AboutYoutubeService } from '../about-youtube/about-youtube.service';

@Component({
  selector: 'about-youtube-modal',
  templateUrl: './about-youtube-modal.component.html',
  providers: [ AboutYoutubeService ]
})
export class AboutYoutubeModal {

  public dialogData;

  constructor(public youtubeApiService: AboutYoutubeService) { 
    this.dialogData = AboutYoutubeService.actualYoutubeData;
  }
}
