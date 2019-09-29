import { Injectable } from '@angular/core';
import {Projects} from '../models/Projects';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Feature} from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private configUrl = 'http://localhost:8080/projects/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(public http: HttpClient) { }

  private projectSource = new BehaviorSubject([]);
  currentProjects = this.projectSource.asObservable();
  changeProjects(projects: Projects[]) {
    this.projectSource.next(projects);
  }

  createNewProject(pro: Projects): Observable<Projects> {
    return this.http.post<Projects>(this.configUrl, pro, this.httpOptions);
  }

  getAllProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.configUrl, this.httpOptions);
  }

  getSingleProjects(proId: number): Observable<Projects> {
    return this.http.get<Projects>(this.configUrl + proId, this.httpOptions);
  }

  updateProject(project: Projects): Observable<Projects> {
    return this.http.put<Projects>(this.configUrl + project.id, project, this.httpOptions);
  }

  deleteProjects(proId: number): Observable<Projects> {
    return this.http.delete<Projects>(this.configUrl + proId, this.httpOptions);
  }
}
