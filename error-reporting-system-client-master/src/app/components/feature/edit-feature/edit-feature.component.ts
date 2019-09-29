import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Feature} from '../../../models/feature';
import {FeatureService} from '../../../services/feature.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Epic} from '../../../models/epic';
import {map, startWith} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {EpicService} from '../../../services/epic.service';
import {FeatureDto} from '../../../models/dto/FeatureDto';
import {CommonJson} from '../../../models/other/CommonJson';

@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.scss']
})
export class EditFeatureComponent implements OnInit {

  constructor(
      public featureService: FeatureService,
      public userService: UserService,
      public epicService: EpicService,
      @Inject(MAT_DIALOG_DATA) public data: FeatureDto) { }


  existingFeature: Feature;
  priorities: CommonJson[] = [
    {value: 'lowest', name: 'Lowest'},
    {value: 'low', name: 'Low'},
    {value: 'medium', name: 'Medium'},
    {value: 'high', name: 'High'},
    {value: 'higher', name: 'Highest'},
    {value: 'needsReview', name: 'Needs Review'},
    {value: 'mustHave', name: 'Must Have'},
    {value: 'niceToHave', name: 'Nice to Have'},
    {value: 'critical', name: 'Critical'},
  ];
  filteredUsers: Observable<User[]>;
  filteredEpics: Observable<Epic[]>;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.epicService.getAllEpics().subscribe(ep => this.epicAutoComplete(ep));
    this.featureService.getSingleFeature(this.data.id).subscribe(fe => this.existingFeature = fe);
  }

  userAutocomplete(fe: User[]) {
    this.filteredUsers = this.editFeatureForm.get('featureAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterUser(name, fe) : fe.slice())
        );
  }
  private _filterUser(name: string, fe: User[]): User[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.userFname.toLowerCase().indexOf(filterValue) === 0);
  }
  displayUserAutocomplete(user: User): string | undefined {
    const userFullName = user.userFname + ' ' + user.userLName;
    return user ? userFullName : undefined;
  }

  epicAutoComplete(fe: Epic[]) {
    this.filteredEpics = this.editFeatureForm.get('featureEpicId').valueChanges
        .pipe(
            startWith<string | Epic>(''),
            map(value => typeof value === 'string' ? value : value.epicName),
            map(name => name ? this._filterEpic(name, fe) : fe.slice())
        );
  }
  private _filterEpic(name: string, fe: Epic[]): Epic[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        epic => epic.epicName.toLowerCase().indexOf(filterValue) === 0);
  }
  displayEpicAutocomplete(epic: Epic): string | undefined {
    return epic ? epic.epicName : undefined;
  }

  updateSuccessMsgView = false;
  editView = false;
  displayView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;

  editFeatureForm = new FormGroup({
    featureEpicId: new FormControl(this.data.featureEpic, [Validators.required]),
    featureName: new FormControl(this.data.featureName, [Validators.required]),
    featureSummary: new FormControl(this.data.featureSummary, [Validators.required]),
    featureDescription: new FormControl(this.data.featureDescription, ),
    featureAssignee: new FormControl(this.data.featureAssignee, [Validators.required]),
    featureStatus: new FormControl(this.data.featureStatus, [Validators.required]),
    featureStartDate: new FormControl({value: this.data.featureStartDate, disabled: true}, Validators.required),
    featureEndDate: new FormControl({value: this.data.featureEndDate, disabled: true}, Validators.required),
  });

  updateFeature() {
    const featureEpic: Epic = this.editFeatureForm.get('featureEpicId').value;
    const featureAssignee: User = this.editFeatureForm.get('featureAssignee').value;

    if (this.existingFeature !== undefined) {
      this.existingFeature.featureName = this.editFeatureForm.get('featureName').value;
      this.existingFeature.featureEpicId = featureEpic.id;
      this.existingFeature.featureSummary = this.editFeatureForm.get('featureSummary').value;
      this.existingFeature.featureDescription = this.editFeatureForm.get('featureDescription').value;
      this.existingFeature.featureAssigneeId = featureAssignee.id;
      this.existingFeature.featureAssigneeFName = featureAssignee.userFname;
      this.existingFeature.featureAssigneeLName = featureAssignee.userLName;
      this.existingFeature.featureStatus = this.editFeatureForm.get('featureStatus').value;
      this.existingFeature.featureStartDate = this.editFeatureForm.get('featureStartDate').value;
      this.existingFeature.featureEndDate = this.editFeatureForm.get('featureEndDate').value;
      this.existingFeature.featureUpdatedDate = new Date();

      this.featureService.updateFeature(this.existingFeature).subscribe(
          res => this.displaySuccessMessageView(),
              err => this.displayErrorView()
      );

      setTimeout(() => {
        this.featureService.getAllFeatures().subscribe(d => {
          this.featureService.changeFeatures(d);
        });}, 2000);
    } else {
      this.displayErrorView();
    }
  }

  deleteFeature() {
    this.featureService.deleteFeature(this.data.id).subscribe(
        re => this.displayDeleteSuccessView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.featureService.getAllFeatures().subscribe(fe =>
          this.featureService.changeFeatures(fe)
      );}, 2000);
  }

  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.errorMsgView = false;
    this.displayView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.displayView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.displayView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayEditView() {
    this.updateSuccessMsgView = false;
    this.editView = true;
    this.displayView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearForm() {
    this.editFeatureForm.reset();
  }

}
