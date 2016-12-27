import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FsUsersService {

  private mockURL: string = 'assets/mock-data/mockusers.json';

  constructor (private http: Http) {}

  search (): Observable<Object> {
    // TODO: Add error handling
    return this.http.get(this.mockURL).map((res: Response) => res.json())
               .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
