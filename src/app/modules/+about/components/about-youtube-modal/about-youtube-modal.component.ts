import { Component } from '@angular/core';
import { AboutYoutubeService } from '../about-youtube/about-youtube.service';

/**
 * Youtube modal is a component used to show inside a modal of material design a video.
 */
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
