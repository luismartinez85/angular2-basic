import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FsUsersService {

  private mockURL:string = 'assets/mock-data/mockusers.json';

  constructor (private http: Http) {}

  search (): Observable<Response> {
    // TODO: Add error handling
    return this.http.get(this.mockURL)
               .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
