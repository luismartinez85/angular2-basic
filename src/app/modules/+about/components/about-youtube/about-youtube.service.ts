import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class AboutYoutubeService {

  public static actualYoutubeData;
  public youtubeData;
  private youtubeAPIURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXrOaIA3FiZ_Qp76WIZmU67zNV4mriEkU&channelId=UCVKdSP47XahRYJpvfA7inmg&part=snippet,id&order=date&maxResults=20';

  constructor (
    private jsonp: Jsonp,
    private sanitize: DomSanitizer
  ) {}

  search () {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    return this.jsonp.get(this.youtubeAPIURL, { search: params }).map(this.extractData);
  }

  selectVideo(item) {
    item.id.videoId  = this.getVideoUrl(item);
    AboutYoutubeService.actualYoutubeData = item;
  }

  getVideoUrl (item){
    return this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.id.videoId);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
