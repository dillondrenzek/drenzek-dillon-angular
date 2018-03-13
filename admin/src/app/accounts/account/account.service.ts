import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from './account.model';
import { Cursor } from '../../core/cursor';
import { APP_CONFIG, AppConfig } from '../../core/appConfig';


@Injectable()
export class AccountService {

  baseUrl: string;

  constructor(private http: Http, @Inject(APP_CONFIG) private appConfig: AppConfig) {
    this.baseUrl = appConfig.apiBaseUrl + 'accounts/';
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res: Response) => res.json()['data']),
      map((cursor: Cursor<Account[]>) => cursor['docs'])
    );
  }

}
