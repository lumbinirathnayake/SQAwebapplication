import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Feature} from '../../../models/feature';
import {FeatureService} from '../../../services/feature.service';
import {formatDate} from '@angular/common';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {map, startWith} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {EpicService} from '../../../services/epic.service';
import {Epic} from '../../../models/epic';
import {CommonJson} from '../../../models/other/CommonJson';
import {Projects} from '../../../models/Projects';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {

  constructor(
      public dialogref: MatDialogRef<AddFeatureComponent>,
      public featureService: FeatureService,
      public userService: UserService,
      public epicService: EpicService,
      private commonService: CommonService,
      @Inject(MAT_DIALOG_DATA) public data: Feature) { }

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
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.epicService.getAllEpics().subscribe(ep => this.epicAutoComplete(ep));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }


  userAutocomplete(fe: User[]) {
    this.filteredUsers = this.addFeatureForm.get('featureAssignee').valueChanges
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
    this.filteredEpics = this.addFeatureForm.get('featureEpicId').valueChanges
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

  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;
  submitted = false;
  addFeatureForm = new FormGroup({
    featureEpicId: new FormControl('', Validators.required),
    featureName: new FormControl('', Validators.required),
    featureSummary: new FormControl('', Validators.required),
    featureDescription: new FormControl(''),
    featureAssignee: new FormControl('', Validators.required),
    featureStatus: new FormControl('', Validators.required),
    featureStartDate: new FormControl({value: '', disabled: true}),
    featureEndDate: new FormControl({value: '', disabled: true}),
  });
  saveFeature() {
    this.submitted = true;
    if (this.addFeatureForm.invalid) {
      return;
    }

    const featureEpic: Epic = this.addFeatureForm.get('featureEpicId').value;
    const featureAssignee: User = this.addFeatureForm.get('featureAssignee').value;
    let newFeature = new Feature(
        featureEpic.id,
        this.currentPro.id, this.addFeatureForm.get('featureName').value,
        this.addFeatureForm.get('featureSummary').value,
        this.addFeatureForm.get('featureDescription').value,
        featureAssignee.id, featureAssignee.userFname, featureAssignee.userLName,
        this.addFeatureForm.get('featureStatus').value,
        this.addFeatureForm.get('featureStartDate').value,
        this.addFeatureForm.get('featureEndDate').value,
        new Date(), null
    );
    this.featureService.addFeature(newFeature).subscribe(
        res => this.displaySuccessMessageView(),
        error1 => this.displayErrorView()
        );

    setTimeout(() => {
      this.featureService.getAllFeatures().subscribe(d => {
        this.featureService.changeFeatures(d);
      });}, 2000);
  }
  displaySuccessMessageView() {
    this.createView = false;
    this.createSuccessMsgView = true;
    this.errorMsgView = false;
  }
  displayErrorView() {
    this.createView = false;
    this.createSuccessMsgView = false;
    this.errorMsgView = true;
  }
  clearForm() {
    this.addFeatureForm.reset();
  }
}
