import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {Feature} from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private configUrl = 'http://localhost:8080/users/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(public http: HttpClient) { }

  private userSource = new BehaviorSubject<User[]>([]);
  currentUsers = this.userSource.asObservable();

  changeUsers(users: User[]) {
    this.userSource.next(users);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.configUrl, user, this.httpOptions);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.configUrl, this.httpOptions);
  }

  getSingleUser(id: number): Observable<User> {
    return this.http.get<User>(this.configUrl + id, this.httpOptions);
  }

  updateUsers(user: User): Observable<User> {
    return this.http.put<User>(this.configUrl + user.id, user, this.httpOptions);
  }

  deleteUsers(id: number): Observable<User> {
    return this.http.delete<User>(this.configUrl + id, this.httpOptions);
  }

  async retAllUsers() {
    let users = await this.getAllUsers().toPromise();
    return users;
  }
}
