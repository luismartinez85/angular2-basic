import { Component } from '@angular/core';

import { FsYoutubeAPIService } from './fs-youtube-api.service';

@Component({
  selector: 'fs-youtube-api',
  providers: [ FsYoutubeAPIService ],
  styleUrls: [ 'fs-youtube-api.component.scss' ],
  templateUrl: 'fs-youtube-api.component.html'
})

export class FsYoutubeAPIComponent{
  dataYoutube: Array<any>;
  searchString: string = '';

  constructor(private fsyoutubeapiservice: FsYoutubeAPIService) {}

  ngOnInit () {
    this.fsyoutubeapiservice.search().subscribe(
      data => {
        this.dataYoutube = data.items;
    });
  }
}
