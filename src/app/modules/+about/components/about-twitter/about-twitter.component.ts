import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';

import { AboutTwitterService } from './about-twitter.service';

@Component({
  selector: 'about-twitter',
  providers: [ AboutTwitterService ],
  styleUrls: [ 'about-twitter.component.scss' ],
  templateUrl: 'about-twitter.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class AboutTwitter {
  dataTwitter: Array<any> = [];
  searchString: string = '';

  constructor(private aboutTwitterService: AboutTwitterService) {}

  ngOnInit () {
    this.aboutTwitterService.search().subscribe(data => {
      let div = document.createElement('div');
      div.innerHTML = data.body;
      let that = this;

      Array.prototype.forEach.call(div.querySelectorAll('.timeline-TweetList .timeline-Tweet'), function(){
        let text = arguments[0].querySelector('.timeline-Tweet-text').textContent;
        let tweetAuthor = arguments[0].querySelector('.TweetAuthor .TweetAuthor-screenName').textContent;
        let img = arguments[0].querySelector('.TweetAuthor .Avatar').getAttribute('data-src-2x');
        let date = arguments[0].querySelector('.timeline-Tweet-metadata').textContent;

        if (arguments[1] < 10) {
          that.dataTwitter.push({
            avatar : img,
            tweet: text,
            date : date,
            author: tweetAuthor
          });
        }
      });
    });
  }
}
