import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutYoutubeModal } from '../about-youtube-modal/about-youtube-modal.component';
import { AboutYoutubeService } from './about-youtube.service';

/**
 * Youtube component load videos from FrontStack youtube channel
 */
@Component({
  selector: 'about-youtube',
  providers: [ AboutYoutubeService ],
  styleUrls: [ './about-youtube.component.css' ],
  templateUrl: './about-youtube.component.html'
})

export class AboutYoutubeComponent {

  dataYoutube: Array<any>;
  videos: Array<any> = [];

  constructor(private aboutYoutubeService: AboutYoutubeService,
              private sanitized: DomSanitizer){}

  ngOnInit () {
    this.aboutYoutubeService.search().subscribe(
      data => {
        this.dataYoutube = data.items;

        for ( let i = 0; i <= data.items.length; i++){
          if ( data.items[i] && data.items[i].id && data.items[i].id.videoId){
            this.videos.push('https://www.youtube.com/embed/' + data.items[i].id.videoId);
          }
        }
      },
      err => console.log(err, 21)
    );
  }
}

