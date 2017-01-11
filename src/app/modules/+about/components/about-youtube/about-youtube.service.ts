import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AboutYoutubeService {

  private youtubeAPIURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXrOaIA3FiZ_Qp76WIZmU67zNV4mriEkU&channelId=UCVKdSP47XahRYJpvfA7inmg&part=snippet,id&order=date&maxResults=20';

  static actualYoutubeData;
  youtubeData;

  constructor(
    private http: Http,
    private sanitize: DomSanitizer
  ){}

  search() {
    return this.http.get(this.youtubeAPIURL)
      .map(this.extractData)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  selectVideo(item) {
    item.id.videoId  = this.getVideoUrl(item);
    AboutYoutubeService.actualYoutubeData = item;
  }

  getVideoUrl(item){
    return this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.id.videoId);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
