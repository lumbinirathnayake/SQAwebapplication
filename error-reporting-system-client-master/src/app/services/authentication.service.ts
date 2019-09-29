import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private configUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  private currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  currentUser = this.currentUserSubject.asObservable();

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): any {
    this.userService.getAllUsers().subscribe(allUsers => {
      for (let user of allUsers) {
        if ((user.userUsername === username) && (user.userPassword === password)) {
          console.log(user);
          return true;
        }
      }
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
