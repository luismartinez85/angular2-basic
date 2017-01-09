import { Component, ElementRef, ViewChild } from '@angular/core';

import { MdDialog } from '@angular/material';
import { AboutYoutubeModal } from '../about-youtube-modal/about-youtube-modal.component';
import { AboutYoutubeService } from './about-youtube.service';

@Component({
  selector: 'about-youtube',
  providers: [ AboutYoutubeService ],
  styleUrls: [ 'about-youtube.component.scss' ],
  templateUrl: 'about-youtube.component.html'
})

export class AboutYoutubeComponent {

  dataYoutube: Array<any>;

  constructor (
    private aboutYoutubeService: AboutYoutubeService,
    public dialog: MdDialog) { }

  ngOnInit () {

    this.aboutYoutubeService.search().subscribe(
      data => {
        this.dataYoutube = data.items;
      }
    );
  }
  openVideo(item) {
    this.aboutYoutubeService.selectVideo(item);

    return this.dialog.open(AboutYoutubeModal, {
      disableClose: false
    });
  }
}

