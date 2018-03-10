import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from './account.model';
import { Cursor } from '../core/cursor';


@Injectable()
export class AccountService {

  baseUrl = 'http://localhost:3000/api/accounts';

  constructor(private http: Http) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res: Response) => res.json()['data']),
      map((cursor: Cursor<Account[]>) => cursor['docs'])
    );
  }

}
