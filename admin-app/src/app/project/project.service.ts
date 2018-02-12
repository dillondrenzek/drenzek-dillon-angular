import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from './project.model';
import { Cursor } from '../core/cursor';

@Injectable()
export class ProjectService {

  baseUrl: string = 'http://localhost:3000/api/projects';

  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res: Response) => res.json()['data']),
      map((cursor: Cursor<Project[]>) => cursor['docs'])
    );
  }

}
