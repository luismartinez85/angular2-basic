import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class AboutYoutubeService {

  public static actualYoutubeData;
  public youtubeData;
  private youtubeAPIURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXrOaIA3FiZ_Qp76WIZmU67zNV4mriEkU&channelId=UCVKdSP47XahRYJpvfA7inmg&part=snippet,id&order=date&maxResults=20';

  constructor (
    private http: Http,
    private sanitize: DomSanitizer
  ) {}

  search () {
    // TODO: Add error handling
    return this.http.get(this.youtubeAPIURL).map(this.extractData);
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
