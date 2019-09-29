import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {FeatureService} from '../../services/feature.service';
import {AddFeatureComponent} from '../feature/add-feature/add-feature.component';
import {Feature} from '../../models/feature';
import {EditFeatureComponent} from '../feature/edit-feature/edit-feature.component';
import {UserService} from '../../services/user.service';
import {AddUsersComponent} from './add-users/add-users.component';
import {User} from '../../models/User';
import {EditUsersComponent} from './edit-users/edit-users.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.scss']
})
export class AppUsersComponent implements OnInit {
  constructor(
      public dialog: MatDialog,
      public userService: UserService) { }

      userSearchForm = new FormGroup({
        userSearch: new FormControl('')
      });
  ngOnInit() {
    this.getAllUsers();
  }

  addNewUser() {
    const addTestCasePopupModule = this.dialog.open(AddUsersComponent);
  }

  allUsers: User[];
  getAllUsers() {
    this.userService.currentUsers.subscribe(users => {
      if (users.length === 0)
        this.userService.getAllUsers().subscribe(use =>
            this.allUsers = use);
      else
        this.allUsers = users;
    });
  }

  viewUser(user: User) {
    this.dialog.open(EditUsersComponent, {data: user});
  }
}
