import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Feature} from '../models/feature';
import {Projects} from '../models/Projects';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private configUrl = 'http://localhost:8080/feature/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  pro: Projects;
  private projectSource = new BehaviorSubject<Projects>(this.pro);
  currentProject = this.projectSource.asObservable();
  changeProject(projects: Projects) {
    this.projectSource.next(projects);
  }

  user: User;
  private userSource = new BehaviorSubject<User>(this.user);
  currentUser = this.userSource.asObservable();
  changeUser(user: User) {
    this.userSource.next(user);
  }
}
