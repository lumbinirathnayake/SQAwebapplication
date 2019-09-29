import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatCheckboxChange, MatDialog, MatDialogRef} from '@angular/material';
import {AppTestCaseComponent} from '../app-test-case.component';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TestCase} from '../../../models/TestCase';
import {TestCaseService} from '../../../services/test-case.service';
import {FeatureService} from '../../../services/feature.service';
import {Feature} from '../../../models/feature';
import {TestCaseFeatureGroup} from '../../../models/other/TestCaseFeatureGroup';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';
import {map, startWith} from 'rxjs/operators';
import {CommonJson} from '../../../models/other/CommonJson';
import {AddBugsComponent} from '../../app-bugs/add-bugs/add-bugs.component';
import {CommonService} from '../../../services/common.service';
import {Projects} from '../../../models/Projects';

@Component({
  selector: 'app-add-test-case',
  templateUrl: './add-test-case.component.html',
  styleUrls: ['./add-test-case.component.scss']
})
export class AddTestCaseComponent implements OnInit {

  constructor(
      private addTestRef: MatDialogRef<AppTestCaseComponent>,
      @Inject(MAT_DIALOG_DATA) public featureGroup: TestCaseFeatureGroup,
      private dialogPopup: MatDialog,
      private testCaseService: TestCaseService,
      private featureService: FeatureService,
      private commonService: CommonService,
      private userService: UserService) { }

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
  testCaseTypess: CommonJson[] = [
    {value: 'functional', name: 'Functional'},
    {value: 'non functional', name: 'Non Functional'},
    {value: 'regression', name: 'Regression'},
    {value: 'smoke', name: 'Smoke'},
  ];
  filteredAssignee: Observable<User[]>;
  filteredCreators: Observable<User[]>;
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(use => {
      this.assigneeAutocomplete(use);
      this.creatorAutocomplete(use)
    });
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }

  assigneeAutocomplete(use: User[]) {
    this.filteredAssignee = this.addTestCaseForm.get('testCaseAssignee').valueChanges
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
    this.filteredCreators = this.addTestCaseForm.get('testCaseCreator').valueChanges
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

  onCheckChange(event: MatCheckboxChange) {
    const formArray: FormArray = this.addTestCaseForm.get('testCaseType') as FormArray;

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

  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;
  addTestCaseForm = new FormGroup({
    testCaseTitle: new FormControl('', Validators.required),
    testCasePriority: new FormControl('', Validators.required),
    testCaseStatus: new FormControl('', Validators.required),
    testCaseSeverity: new FormControl('', Validators.required),
    testCaseAssignee: new FormControl('', Validators.required),
    testCaseAutomationStatus: new FormControl(''),
    testCaseType: new FormArray([]),
    testCaseCreator: new FormControl('', Validators.required),
    testCaseTestStep: new FormControl(''),
    testCaseExpectedResult: new FormControl(''),
});
  saveTestCase() {
      if (this.addTestCaseForm.invalid)
          return;
    const assignee: User = this.addTestCaseForm.get('testCaseAssignee').value;
    const creator: User = this.addTestCaseForm.get('testCaseCreator').value;
    this.featureService.getSingleFeature(this.featureGroup.testCaseFeatureId).subscribe(fea => {
      let newTestCase: TestCase = new TestCase(
          this.addTestCaseForm.get('testCaseTitle').value, this.currentPro.id,
          fea.id, this.featureGroup.id, fea.featureName,
          this.addTestCaseForm.get('testCasePriority').value,
          this.addTestCaseForm.get('testCaseStatus').value,
          this.addTestCaseForm.get('testCaseSeverity').value,
          assignee.id, assignee.userFname, assignee.userLName,
          this.addTestCaseForm.get('testCaseAutomationStatus').value,
          this.addTestCaseForm.get('testCaseType').value,
          creator.id, creator.userFname, creator.userLName,
          this.addTestCaseForm.get('testCaseTestStep').value,
          this.addTestCaseForm.get('testCaseExpectedResult').value,
          new Date(), null);

      this.testCaseService.addTestCase(newTestCase).subscribe(
          re => this.displaySuccessMessageView(),
          error1 => this.displayErrorView()
      );

      setTimeout(() => {
        this.testCaseService.getAllTestCases().subscribe(tes =>
            this.testCaseService.changeTestCase(tes)
        )}, 2000);
    });
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
  clearform() {
      this.addTestCaseForm.reset();
  }

}
