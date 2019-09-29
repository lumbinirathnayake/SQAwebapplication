import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatCheckboxChange, MatDialog} from '@angular/material';
import {TestCase} from '../../../models/TestCase';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {map, startWith} from 'rxjs/operators';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {FeatureService} from '../../../services/feature.service';
import {TestCaseService} from '../../../services/test-case.service';
import {TestCaseDto} from '../../../models/dto/TestCaseDto';
import {TestCaseTypeCheckBox} from '../../../models/other/TestCaseTypeCheckBox';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {AddBugsComponent} from '../../app-bugs/add-bugs/add-bugs.component';
import {TestCaseFeatureGroupService} from '../../../services/test-case-feature-group.service';

@Component({
  selector: 'app-edit-test-case',
  templateUrl: './edit-test-case.component.html',
  styleUrls: ['./edit-test-case.component.scss']
})
export class EditTestCaseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private testCaseDto: TestCaseDto,
              private userService: UserService,
              private featureService: FeatureService,
              private testCaseFeatureGroupService: TestCaseFeatureGroupService,
              private dialogPopup: MatDialog,
              private testCaseService: TestCaseService) { }

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
  severities: CommonJson[] = [
    {value: 'lowest', name: 'Blocker'},
    {value: 'low', name: 'Low'},
    {value: 'medium', name: 'Medium'},
    {value: 'high', name: 'High'},
    {value: 'critical', name: 'Critical'},
  ];
  testCaseStatus: CommonJson[] = [
    {value: 'fail', name: 'Fail'},
    {value: 'block', name: 'Block'},
    {value: 'not executed', name: 'Not Executed'},
    {value: 'pass', name: 'Pass'},
    {value: 'work in progress', name: 'Work In Progress'},
  ];
  testCaseAutomationStatus: CommonJson[] = [
    {value: 'yes', name: 'Yes'},
    {value: 'no', name: 'No'},
    {value: 'not applicable', name: 'Not Applicable'},
  ];
  testCaseTypess: TestCaseTypeCheckBox[] = [];
  filteredAssignee: Observable<User[]>;
  filteredCreators: Observable<User[]>;
  existingTestCase: TestCase;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(use => {
      this.assigneeAutocomplete(use);
      this.creatorAutocomplete(use)
    });
    this.testCaseService.getSingleTestCase(this.testCaseDto.id).subscribe(tc => this.existingTestCase = tc);
    this.testCaseTypess = this.loadCheckBoxes(this.testCaseDto);
  }

  private loadCheckBoxes(testCaseDto: TestCaseDto) {
    const formArray: FormArray = this.editTestCaseForm.get('testCaseType') as FormArray;
    let updatedTestCseTypes = [
      {value: 'functional', name: 'Functional', checked: false},
      {value: 'non functional', name: 'Non Functional', checked: false},
      {value: 'regression', name: 'Regression', checked: false},
      {value: 'smoke', name: 'Smoke', checked: false},
    ];
    for (let re of testCaseDto.testCaseType) {
      formArray.push(new FormControl(re));
      for (let name of updatedTestCseTypes) {
        if (name.value === re) {
          name.checked = true;
        }
      }
    }
    return updatedTestCseTypes;
  }

  assigneeAutocomplete(use: User[]) {
    this.filteredAssignee = this.editTestCaseForm.get('testCaseAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterAssignee(name, use) : use.slice())
        );
  }
  private _filterAssignee(name: string, fe: User[]): User[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.userFname.toLowerCase().indexOf(filterValue) === 0);
  }
  displayAssigneeAutocomplete(user: User): string | undefined {
    const userFullName = user.userFname + ' ' + user.userLName;
    return user ? userFullName : undefined;
  }

  creatorAutocomplete(use: User[]) {
    this.filteredCreators = this.editTestCaseForm.get('testCaseCreator').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterCreator(name, use) : use.slice())
        );
  }
  private _filterCreator(name: string, fe: User[]): User[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.userFname.toLowerCase().indexOf(filterValue) === 0);
  }
  displayCreatorAutocomplete(user: User): string | undefined {
    const userFullName = user.userFname + ' ' + user.userLName;
    return user ? userFullName : undefined;
  }

  isDisplayAddTestCaseLink = false;
  onCheckChange(event: MatCheckboxChange) {
    const formArray: FormArray = this.editTestCaseForm.get('testCaseType') as FormArray;

    if (event.source.checked) {
      formArray.push(new FormControl(event.source.value));
    } else {
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.source.value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
  onSelectStatus(value: any) {
    if (value === 'Fail')
      this.isDisplayAddTestCaseLink = true;
    else
      this.isDisplayAddTestCaseLink = false;
  }

  updateSuccessMsgView = false;
  editView = false;
  displayView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;
  editTestCaseForm = new FormGroup({
    testCaseTitle: new FormControl(this.testCaseDto.testCaseTitle, Validators.required),
    testCasePriority: new FormControl(this.testCaseDto.testCasePriority, Validators.required),
    testCaseStatus: new FormControl(this.testCaseDto.testCaseStatus, Validators.required),
    testCaseSeverity: new FormControl(this.testCaseDto.testCaseSeverity, Validators.required),
    testCaseAssignee: new FormControl(this.testCaseDto.testCaseAssignee, Validators.required),
    testCaseAutomationStatus: new FormControl(this.testCaseDto.testCaseAutomationStatus, Validators.required),
    testCaseType: new FormArray([]),
    testCaseCreator: new FormControl(this.testCaseDto.testCaseCreator, Validators.required),
    testCaseTestStep: new FormControl(this.testCaseDto.testCaseTestStep),
    testCaseExpectedResult: new FormControl(this.testCaseDto.testCaseExpectedResult),
  });
  updateTestCase() {
    if (this.editTestCaseForm.invalid)
      return;

    const assignee: User = this.editTestCaseForm.get('testCaseAssignee').value;
    const creator: User = this.editTestCaseForm.get('testCaseCreator').value;

    this.existingTestCase.testCaseTitle = this.editTestCaseForm.get('testCaseTitle').value;
    this.existingTestCase.testCaseFeatureId = this.testCaseDto.testCaseFeature.id;
    this.existingTestCase.testCaseFeatureName = this.testCaseDto.testCaseFeature.featureName;
    this.existingTestCase.testCasePriority = this.editTestCaseForm.get('testCasePriority').value;
    this.existingTestCase.testCaseStatus = this.editTestCaseForm.get('testCaseStatus').value;
    this.existingTestCase.testCaseSeverity = this.editTestCaseForm.get('testCaseSeverity').value;
    this.existingTestCase.testCaseAssigneeId = assignee.id;
    this.existingTestCase.testCaseAssigneeFName = assignee.userFname;
    this.existingTestCase.testCaseAssigneeLName = assignee.userLName;
    this.existingTestCase.testCaseAutomationStatus = this.editTestCaseForm.get('testCaseAutomationStatus').value;
    this.existingTestCase.testCaseType = this.editTestCaseForm.get('testCaseType').value;
    this.existingTestCase.testCaseCreatorId = creator.id;
    this.existingTestCase.testCaseCreatorFName = creator.userFname;
    this.existingTestCase.testCaseCreatorLName = creator.userLName;
    this.existingTestCase.testCaseTestStep = this.editTestCaseForm.get('testCaseTestStep').value;
    this.existingTestCase.testCaseExpectedResult = this.editTestCaseForm.get('testCaseExpectedResult').value;
    this.existingTestCase.testCaseUpdatedDate = new Date();

    this.testCaseService.updateTestCase(this.existingTestCase).subscribe(
        re => this.displaySuccessMessageView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.testCaseService.getAllTestCases().subscribe(cases =>
          this.testCaseService.changeTestCase(cases)
      );}, 2000);
  }

  deleteTestCase() {
    this.testCaseService.deleteTestCase(this.existingTestCase.id).subscribe(
        res => this.displayDeleteSuccessView(),
        error1 => this.errorMsgView
    );

    setTimeout(() => {
      this.testCaseService.getAllTestCases().subscribe(cases =>
          this.testCaseService.changeTestCase(cases)
      )}, 2000);
  }

  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
    this.displayView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.displayView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.displayView = false;
    this.deleteSuccessView = false;
  }
  displayEditView() {
    this.updateSuccessMsgView = false;
    this.editView = true;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.displayView = false;
    this.deleteSuccessView = false;
  }
  clearform() {
    this.editTestCaseForm.reset();
  }

  createNewTestCaseView() {
    this.dialogPopup.open(AddBugsComponent, {data: this.testCaseDto})
  }


}
