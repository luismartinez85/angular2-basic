import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/**
 * Service tool for youtube component
 */
@Injectable()
export class AboutYoutubeService {

  private youtubeAPIURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXrOaIA3FiZ_Qp76WIZmU67zNV4mriEkU&channelId=UCVKdSP47XahRYJpvfA7inmg&part=snippet,id&order=date&maxResults=20';

  constructor(
    private http: Http
  ){}

  /**
   * Get videos of youtubeAPIURL
   */
  search() {
    return this.http.get(this.youtubeAPIURL)
      .map(this.extractData)
      .catch((error: any) => Observable.throw('Server error'));
  }

  /**
   * ExtractData is an auxiliar function to extract data from a request
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
