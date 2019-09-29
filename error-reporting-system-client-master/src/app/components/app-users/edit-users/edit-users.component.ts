import {Component, Inject, OnInit} from '@angular/core';
import {FeatureService} from '../../../services/feature.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Feature} from '../../../models/feature';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {Projects} from '../../../models/Projects';
import {ProjectsService} from '../../../services/projects.service';
import {CommonJson} from '../../../models/other/CommonJson';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  constructor(
      public userService: UserService,
      @Inject(MAT_DIALOG_DATA) public data: User) { }

  userTypes: CommonJson[] = [
    {value: 'Admin', name: 'Admin'},
    {value: 'User', name: 'User'}
  ];
  existingUser: User;
  ngOnInit() {
    this.userService.getSingleUser(this.data.id).subscribe(fea => this.existingUser = fea);
  }

  updateSuccessMsgView = false;
  editView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;

  editUserForm = new FormGroup({
    userEnmpId: new FormControl(this.data.userEnmpId, Validators.required),
    userEMail: new FormControl(this.data.userEMail, Validators.required),
    userFname: new FormControl(this.data.userFname, Validators.required),
    userLName: new FormControl(this.data.userLName, Validators.required),
    userAddress: new FormControl(this.data.userAddress),
    userUsername: new FormControl(this.data.userUsername, Validators.required),
    userType: new FormControl(this.data.userType, Validators.required),
  });

  updateUser() {
    if (this.editUserForm.invalid)
      return;

    if (this.existingUser !== undefined) {
      this.existingUser.userEnmpId = this.editUserForm.get('userEnmpId').value;
      this.existingUser.userEMail = this.editUserForm.get('userEMail').value;
      this.existingUser.userFname = this.editUserForm.get('userFname').value;
      this.existingUser.userLName = this.editUserForm.get('userLName').value;
      this.existingUser.userAddress = this.editUserForm.get('userAddress').value;
      this.existingUser.userUsername = this.editUserForm.get('userUsername').value;
      this.existingUser.userType = this.editUserForm.get('userType').value;
      this.existingUser.userUpdatedDate = new Date();

      this.userService.updateUsers(this.existingUser).subscribe(
          res => this.displaySuccessMessageView(),
          error1 => this.displayErrorView()
      );

      setTimeout(() => {
        this.userService.getAllUsers().subscribe(use =>
            this.userService.changeUsers(use)
        )}, 2000);
    } else {
      this.displayErrorView();
    }
  }

  deleteUsers() {
    this.userService.deleteUsers(this.data.id).subscribe(
        res => this.displaySuccessMessageView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.userService.getAllUsers().subscribe(use =>
          this.userService.changeUsers(use)
      )}, 2000);
  }

  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearForm() {
    this.editUserForm.reset();
  }
}
