import { Component } from '@angular/core';
import { AboutYoutubeService } from '../about-youtube/about-youtube.service';

@Component({
  selector: 'about-youtube-modal',
  templateUrl: './about-youtube-modal.component.html',
  providers: [ AboutYoutubeService ]
})
export class AboutYoutubeModal {

  public dialogData;

  constructor() {
    this.dialogData = AboutYoutubeService.actualYoutubeData;
  }
}
