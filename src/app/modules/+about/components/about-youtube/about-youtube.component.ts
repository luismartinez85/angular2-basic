import { Component, ElementRef, ViewChild } from '@angular/core';

import { MdDialog } from '@angular/material';
import { AboutYoutubeModal } from '../about-youtube-modal/about-youtube-modal.component';
import { AboutYoutubeService } from './about-youtube.service';

/**
 * Youtube component
 */
@Component({
  selector: 'about-youtube',
  providers: [ AboutYoutubeService ],
  styleUrls: [ 'about-youtube.component.scss' ],
  templateUrl: 'about-youtube.component.html'
})

export class AboutYoutubeComponent {

  private aboutYoutubeService: AboutYoutubeService;
  private dialog: MdDialog;

  dataYoutube: Array<any>;

  ngOnInit () {

    this.aboutYoutubeService.search().subscribe(
      data => { this.dataYoutube = data.items; },
      err => console.log(err)
    );
  }
  openVideo(item) {
    this.aboutYoutubeService.selectVideo(item);

    return this.dialog.open(AboutYoutubeModal, {
      disableClose: false
    });
  }
}

