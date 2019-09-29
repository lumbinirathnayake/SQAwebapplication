import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {first} from 'rxjs/operators';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {UserService} from '../../services/user.service';
import {CommonService} from '../../services/common.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = false;

  constructor(
      private userService: UserService,
      private router: Router,
      private commonService: CommonService
  ) {
  }

  ngOnInit() {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  isLogin = false;
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;

    this.userService.getAllUsers().subscribe(allUsers => {
      let isLogin = false;
      for (let user of allUsers) {
        if ((user.userUsername === username) && (user.userPassword === password)) {
          this.commonService.changeUser(user);
          isLogin = true;
          break;
        } else {
          isLogin = false;
        }
      }

      if (isLogin) {
        this.router.navigate(['home']);
      } else {
        this.loading = false;
        this.error = true;
      }

      setTimeout(() => {this.error = false}, 2000);
    });
  }
}
