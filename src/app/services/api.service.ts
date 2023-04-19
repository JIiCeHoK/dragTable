import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ITableData, IUser } from '../shared/interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    API_URL = 'http://87.242.76.45/testdata.json'

    constructor(private http: HttpClient) { }

    getData$(): Observable<ITableData | null> {
        return this.http.get<ITableData>(this.API_URL).pipe(catchError((_) => {
            return of(null)
        }))
    }
}
