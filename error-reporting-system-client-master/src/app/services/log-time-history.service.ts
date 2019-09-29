import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Bugs} from '../models/Bugs';
import {LogTimeHistory} from '../models/other/LogTimeHistory';

@Injectable({
  providedIn: 'root'
})
export class LogTimeHistoryService {
  private configUrl = 'http://localhost:8080/logTimeHistory/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) {
  }

  private logTimeHistorySource = new BehaviorSubject<LogTimeHistory[]>([]);
  currentLogTimeHistories = this.logTimeHistorySource.asObservable();
  changeCurrentLogTimeHistory(logTimeHistories: LogTimeHistory[]) {
    this.logTimeHistorySource.next(logTimeHistories);
  }

  addLogTimeHistory(logTimeHistory: LogTimeHistory): Observable<LogTimeHistory> {
    return this.http.post<LogTimeHistory>(this.configUrl, logTimeHistory, this.httpOptions);
  }

  getAllLogTimeHistory(): Observable<LogTimeHistory[]> {
    return this.http.get<LogTimeHistory[]>(this.configUrl, this.httpOptions);
  }

  getSingleLogTimeHistory(logTimeHistoryId: number): Observable<LogTimeHistory> {
    return this.http.get<LogTimeHistory>(this.configUrl + logTimeHistoryId, this.httpOptions);
  }

  updateLogTimeHistory(logTimeHistory: LogTimeHistory): Observable<LogTimeHistory> {
    return this.http.put<LogTimeHistory>(this.configUrl + logTimeHistory.id, logTimeHistory, this.httpOptions);
  }

  deleteLogTimeHistory(logTimeHistoryId: number): Observable<LogTimeHistory> {
    return this.http.delete<LogTimeHistory>(this.configUrl + logTimeHistoryId, this.httpOptions);
  }
}
