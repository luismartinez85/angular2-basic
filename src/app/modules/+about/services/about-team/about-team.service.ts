import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

/**
 * About Team Service
 */
@Injectable()
export class AboutTeamService {

  private mockURL: string = 'assets/mock-data/mockusers.json';

  constructor (private http: Http) {}

  /**
   * Search return a list of team members
   */
  search (): Observable<Response> {
    return this.http.get(this.mockURL).map((res: Response) => res.json());
  }
}
