import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from './project.model';
import { Cursor } from '../../core/cursor';
import { APP_CONFIG, AppConfig } from '../../core/appConfig';

@Injectable()
export class ProjectService {

  baseUrl: string;

  constructor(private http: Http, @Inject(APP_CONFIG) private appConfig: AppConfig) {
    this.baseUrl = appConfig.apiBaseUrl + 'projects/';
  }

  getProject(id: string): Observable<Project> {
    const url = this.baseUrl + id;
    return this.http.get(url).pipe(
      map((res: Response) => <Project>res.json()['data'])
    );
  }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res: Response) => res.json()['data']),
      map((cursor: Cursor<Project[]>) => cursor['docs'])
    );
  }

  saveProject(project: Project): Observable<Project> {

    if (project._id) {
      // update existing project
      return this.http.put(this.baseUrl, project).pipe(
        map((res: Response) => res.json()['data'])
      );
    } else {
      // save new project
      return this.http.post(this.baseUrl, project).pipe(
        map((res: Response) => res.json()['data'])
      );
    }
  }

  deleteProject(id: string): Observable<void> {
    const url = this.baseUrl + id;
    return this.http.delete(url).pipe(
      map(() => null)
    );
  }

}
