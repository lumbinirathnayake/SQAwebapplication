import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tasks} from '../models/Tasks';
import {Story} from '../models/Story';
import {Sprint} from '../models/Sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private configUrl = 'http://localhost:8080/sprint/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  private sprintSource = new BehaviorSubject<Sprint[]>([]);
  currentSprints = this.sprintSource.asObservable();
  changeSprints(sprints: Sprint[]) {
    this.sprintSource.next(sprints)
  }

  createNewSprint(sprint: Sprint): Observable<Sprint> {
    return this.http.post<Sprint>(this.configUrl, sprint, this.httpOptions);
  }

  getAllSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.configUrl, this.httpOptions);
  }

  getSingleSprint(sprintId: number): Observable<Sprint> {
    return this.http.get<Sprint>(this.configUrl + sprintId, this.httpOptions);
  }

  updateSprint(sprint: Sprint): Observable<Sprint> {
    return this.http.put<Sprint>(this.configUrl + sprint.id, sprint, this.httpOptions);
  }

  deleteSprint(sprintId: number): Observable<Sprint> {
    return this.http.delete<Sprint>(this.configUrl + sprintId, this.httpOptions);
  }
}
