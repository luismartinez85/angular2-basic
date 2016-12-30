import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AboutTeamService {

  private mockURL: string = 'assets/mock-data/mockusers.json';

  constructor (private http: Http) {}

  search (): Observable<Response> {
    return this.http.get(this.mockURL).map((res: Response) => res.json());
  }
}
