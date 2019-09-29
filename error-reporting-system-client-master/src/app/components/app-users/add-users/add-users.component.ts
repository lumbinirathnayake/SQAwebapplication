import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatDialogRef} from '@angular/material';
import {FeatureService} from '../../../services/feature.service';
import {Feature} from '../../../models/feature';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {Projects} from '../../../models/Projects';
import {ProjectsService} from '../../../services/projects.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CommonJson} from '../../../models/other/CommonJson';
import {addUserFormValidator} from '../../../other/ValidateUrl';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(
      public userService: UserService,
      public projectService: ProjectsService,
      @Inject(MAT_DIALOG_DATA) public data: User) {

  }

  userTypes: CommonJson[] = [
    {value: 'Admin', name: 'Admin'},
    {value: 'User', name: 'User'}
  ];
  ngOnInit() {
  }

  addUserForm = new FormGroup({
    userEnmpId: new FormControl('', Validators.required),
    userEMail: new FormControl('', Validators.required),
    userFname: new FormControl('', Validators.required),
    userLName: new FormControl('', Validators.required),
    userAddress: new FormControl(''),
    userUsername: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
    userConfirmPassword: new FormControl('', Validators.required),
  });

  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;

  saveUser() {
    if (this.addUserForm.invalid) {
      return;
    }

    let newUser = new User(
        this.addUserForm.get('userEnmpId').value,
        this.addUserForm.get('userEMail').value,
        this.addUserForm.get('userFname').value,
        this.addUserForm.get('userLName').value,
        this.addUserForm.get('userType').value,
        this.addUserForm.get('userAddress').value,
        this.addUserForm.get('userPassword').value,
        null,
        this.addUserForm.get('userUsername').value,
        new Date(), null
    );
    this.userService.createNewUser(newUser).subscribe(
        res => this.displaySuccessMessageView(),
        error1 => this.displayErrorView()
    );
    this.userService.getAllUsers().subscribe(use =>
      this.userService.changeUsers(use)
    );
  }

  displaySuccessMessageView() {
    this.createView = false;
    this.createSuccessMsgView = true;
    this.errorMsgView = false;
  }
  displayErrorView() {
    this.errorMsgView = true;
    this.createSuccessMsgView = false;
    this.createView = false;
  }
  clearForm() {
    this.addUserForm.reset();
  }
}
