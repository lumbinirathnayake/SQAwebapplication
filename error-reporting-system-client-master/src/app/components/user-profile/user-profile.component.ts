import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private commonService: CommonService) { }

  currentUser: User;
  userProfileForm: FormGroup;
  updateSuccessMsgView = false;
  errorMsgView = false;
  ngOnInit() {
    this.commonService.currentUser.subscribe(us => {
      this.currentUser = us;
      this.userProfileForm = new FormGroup({
        userEnmpId: new FormControl(this.currentUser.userEnmpId, Validators.required),
        userEMail: new FormControl(this.currentUser.userEMail, Validators.required),
        userFname: new FormControl(this.currentUser.userFname, Validators.required),
        userLName: new FormControl(this.currentUser.userLName, Validators.required),
        userAddress: new FormControl(this.currentUser.userAddress, Validators.required),
        userPassword: new FormControl(this.currentUser.userPassword, Validators.required),
        userUsername: new FormControl(this.currentUser.userUsername, Validators.required),
        confirmUserPassword: new FormControl(this.currentUser.userUsername, Validators.required)
      });
    });
  }

  updateUserProfile() {
    this.currentUser.userEnmpId = this.userProfileForm.get('userEnmpId').value;
    this.currentUser.userEMail = this.userProfileForm.get('userEMail').value;
    this.currentUser.userFname = this.userProfileForm.get('userFname').value;
    this.currentUser.userLName = this.userProfileForm.get('userLName').value;
    this.currentUser.userAddress = this.userProfileForm.get('userAddress').value;
    this.currentUser.userPassword = this.userProfileForm.get('userPassword').value;
    this.currentUser.userUsername = this.userProfileForm.get('userUsername').value;

    this.userService.updateUsers(this.currentUser).subscribe(
        re => {
          this.updateSuccessMsgView = true;
          setTimeout(() => {this.updateSuccessMsgView = false}, 5000)
        },
        error1 => {
          this.errorMsgView = true;
          setTimeout(() => {this.errorMsgView = false}, 5000)
        }
    );

    setTimeout(() => {
      this.userService.getSingleUser(this.currentUser.id).subscribe(re =>
          this.commonService.changeUser(re)
      )}, 2000);
  }
}
