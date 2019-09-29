import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Epic} from '../models/epic';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {
  private configUrl = 'http://localhost:8080/epic/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(public http: HttpClient) { }

  private epicSourse = new BehaviorSubject<Epic[]>([]);
  currentEpics = this.epicSourse.asObservable();
  changeEpic(epis: Epic[]) {
    this.epicSourse.next(epis);
  }

  createNewEpic(epic: Epic): Observable<Epic> {
    return this.http.post<Epic>(this.configUrl, epic, this.httpOptions);
  }

  getAllEpics(): Observable<Epic[]> {
    return this.http.get<Epic[]>(this.configUrl, this.httpOptions);
  }

  getSingleEpic(id: number): Observable<Epic> {
    return this.http.get<Epic>(this.configUrl + id, this.httpOptions);
  }

  updateEpic(epic: Epic): Observable<Epic> {
    return this.http.put<Epic>(this.configUrl + epic.id, epic, this.httpOptions);
  }

  deleteEpic(id: number): Observable<Epic> {
    return this.http.delete<Epic>(this.configUrl + id, this.httpOptions);
  }
}
