import { Component, ElementRef, ViewChild } from '@angular/core';

import { MdDialog } from '@angular/material';
import { AboutYoutubeModal } from '../about-youtube-modal/about-youtube-modal.component';
import { AboutYoutubeService } from './about-youtube.service';

/**
 * Youtube component load videos from FrontStack youtube channel
 */
@Component({
  selector: 'about-youtube',
  providers: [ AboutYoutubeService ],
  styleUrls: [ 'about-youtube.component.scss' ],
  templateUrl: 'about-youtube.component.html'
})

export class AboutYoutubeComponent {

  dataYoutube: Array<any>;

  constructor(
    private aboutYoutubeService: AboutYoutubeService,
    private dialog: MdDialog
  ){}

  ngOnInit () {
    this.aboutYoutubeService.search().subscribe(
      data => { this.dataYoutube = data.items; },
      err => console.log(err, 21)
    );
  }

  /**
   * Open a modal dialog of material design and his content is the selected video.
   */
  openVideo(item) {
    this.aboutYoutubeService.selectVideo(item);

    return this.dialog.open(AboutYoutubeModal, {
      disableClose: false
    });
  }
}

