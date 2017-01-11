import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

/**
 * Service tool for youtube component
 */
@Injectable()
export class AboutYoutubeService {

  static actualYoutubeData;
  youtubeData;

  private youtubeAPIURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXrOaIA3FiZ_Qp76WIZmU67zNV4mriEkU&channelId=UCVKdSP47XahRYJpvfA7inmg&part=snippet,id&order=date&maxResults=20';

  constructor(
    private http: Http,
    private sanitize: DomSanitizer
  ){}

  /**
   * Get videos of youtubeAPIURL
   */
  search() {
    return this.http.get(this.youtubeAPIURL)
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Store in actualYoutubeData a video from youtube
   */
  selectVideo(item) {
    item.id.videoId  = this.getVideoUrl(item);
    AboutYoutubeService.actualYoutubeData = item;
  }

  /**
   * Get a video url from a item of youtube API
   */
  getVideoUrl(item){
    return this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.id.videoId);
  }

  /**
   * ExtractData is an auxiliar function to extract data from a request
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
