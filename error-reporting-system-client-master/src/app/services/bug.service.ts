import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Bugs} from '../models/Bugs';
import {Feature} from '../models/feature';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private configUrl = 'http://localhost:8080/bugs/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
        'Something bad happened; please try again later.');
  };

  constructor(public http: HttpClient) {
  }

  private bugSource = new BehaviorSubject<Bugs[]>([]);
  currentBugs = this.bugSource.asObservable();
  changeCurrentBugs(bugList: Bugs[]) {
    this.bugSource.next(bugList);
  }

  addBug(bug: Bugs): Observable<Bugs> {
    return this.http.post<Bugs>(this.configUrl, bug, this.httpOptions);
  }

  getAllBugs(): Observable<Bugs[]> {
    return this.http.get<Bugs[]>(this.configUrl, this.httpOptions);
  }

  getSingleBug(bugId: number): Observable<Bugs> {
    return this.http.get<Bugs>(this.configUrl + bugId, this.httpOptions);
  }

  updateBug(bugs: Bugs): Observable<Bugs> {
    return this.http.put<Bugs>(this.configUrl + bugs.id, bugs, this.httpOptions);
  }

  deleteBug(bugId: number): Observable<Bugs> {
    return this.http.delete<Bugs>(this.configUrl + bugId, this.httpOptions);
  }
}
