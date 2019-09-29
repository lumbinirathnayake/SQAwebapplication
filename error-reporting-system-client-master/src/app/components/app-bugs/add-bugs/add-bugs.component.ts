import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FeatureService} from '../../../services/feature.service';
import {UserService} from '../../../services/user.service';
import {EpicService} from '../../../services/epic.service';
import {Feature} from '../../../models/feature';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Epic} from '../../../models/epic';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppBugsComponent} from '../app-bugs.component';
import {TestCase} from '../../../models/TestCase';
import {TestCaseService} from '../../../services/test-case.service';
import {Bugs} from '../../../models/Bugs';
import {Sprint} from '../../../models/Sprint';
import {BugService} from '../../../services/bug.service';
import {TestCaseFeatureGroup} from '../../../models/other/TestCaseFeatureGroup';
import {TestCaseDto} from '../../../models/dto/TestCaseDto';
import {Projects} from '../../../models/Projects';
import {CommonService} from '../../../services/common.service';
import {SprintService} from '../../../services/sprint.service';

@Component({
  selector: 'app-add-bugs',
  templateUrl: './add-bugs.component.html',
  styleUrls: ['./add-bugs.component.scss']
})
export class AddBugsComponent implements OnInit {
  constructor(
      public dialogref: MatDialogRef<AppBugsComponent>,
      public featureService: FeatureService,
      public userService: UserService,
      private testCaseService: TestCaseService,
      private bugService: BugService,
      private sprintService: SprintService,
      private commonService: CommonService,
      @Inject(MAT_DIALOG_DATA) public testCaseDto: TestCaseDto) { }

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
  bugStatus: CommonJson[] = [
    {value: 'fail', name: 'Fail'},
    {value: 'block', name: 'Block'},
    {value: 'not executed', name: 'Not Executed'},
    {value: 'pass', name: 'Pass'},
    {value: 'work in progress', name: 'Work In Progress'},
  ];
  bugEnvironment: CommonJson[] = [
    {value: 'none', name: 'None'},
    {value: 'dev', name: 'Dev'},
    {value: 'ppe', name: 'PPE'},
    {value: 'prod', name: 'PROD'},
    {value: 'qa', name: 'QA'},
    {value: 'stg', name: 'STG'},
  ];
  filteredAssignee: Observable<User[]>;
  filteredReporter: Observable<User[]>;
  filteredSprints: Observable<Sprint[]>;
  filteredFeatures: Observable<Feature[]>;
  filteredTestCases: Observable<TestCase[]>;
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(user => this.userAutocomplete(user));
    this.featureService.getAllFeatures().subscribe(fea => this.featureAutoComplete(fea));
    this.testCaseService.getAllTestCases().subscribe(te => this.testCaseAutoComplete(te));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    this.sprintService.getAllSprints().subscribe(sp => this.sprintAutocomplete(sp));
  }

  testCaseAutoComplete(tc: TestCase[]) {
    this.filteredTestCases = this.addBugsForm.get('bugTestCase').valueChanges
        .pipe(
            startWith<string | TestCase>(''),
            map(value => typeof value === 'string' ? value : value.testCaseTitle),
            map(name => name ? this._filterTestCase(name, tc) : tc.slice())
        );
  }
  private _filterTestCase(name: string, fe: TestCase[]): TestCase[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        t => t.testCaseTitle.toLowerCase().indexOf(filterValue) === 0);
  }
  displayTestCaseAutocomplete(tc: TestCase): string | undefined {
    return tc ? tc.testCaseTitle : undefined;
  }

  featureAutoComplete(fea: Feature[]) {
    this.filteredFeatures = this.addBugsForm.get('bugFeature').valueChanges
        .pipe(
            startWith<string | Feature>(''),
            map(value => typeof value === 'string' ? value : value.featureName),
            map(name => name ? this._filterFeature(name, fea) : fea.slice())
        );
  }
  private _filterFeature(name: string, fe: Feature[]): Feature[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.featureName.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFeatureAutocomplete(feat: Feature): string | undefined {
    return feat ? feat.featureName : undefined;
  }

  userAutocomplete(fe: User[]) {
    this.filteredAssignee = this.addBugsForm.get('bugAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterUser(name, fe) : fe.slice())
        );
    this.filteredReporter = this.addBugsForm.get('bugReporter').valueChanges
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

  sprintAutocomplete(sprints: Sprint[]) {
    this.filteredSprints = this.addBugsForm.get('bugSprint').valueChanges
        .pipe(
            startWith<string | Sprint>(''),
            map(value => typeof value === 'string' ? value : value.sprintName),
            map(name => name ? this._filterSprint(name, sprints) : sprints.slice())
        );
  }
  private _filterSprint(name: string, sprints: Sprint[]): Sprint[] {
    const filterValue = name.toLowerCase();
    return sprints.filter(
        sprint => sprint.sprintName.toLowerCase().indexOf(filterValue) === 0);
  }
  displaySprintAutocomplete(sprint: Sprint): string | undefined {
    return sprint ? sprint.sprintName : undefined;
  }


  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;
  addBugsForm = new FormGroup({
    bugTitle: new FormControl('', Validators.required),
    bugDescription: new FormControl(''),
    bugSprint: new FormControl('', Validators.required),
    bugTestCase: new FormControl('', Validators.required),
    bugFeature: new FormControl('', Validators.required),
    bugAssignee: new FormControl('', Validators.required),
    bugSeverity: new FormControl('', Validators.required),
    bugPriority: new FormControl('', Validators.required),
    bugStatus: new FormControl('', Validators.required),
    bugReporter: new FormControl('', Validators.required),
    bugEnvironment: new FormControl('', Validators.required),
    bugStepToReproduce: new FormControl(''),
  });
  saveBug() {
    if (this.addBugsForm.invalid) {
      return;
    }

    const testCase: TestCase = this.addBugsForm.get('bugTestCase').value;
    const sprint: Sprint = this.addBugsForm.get('bugSprint').value;
    const feature: Feature = this.addBugsForm.get('bugFeature').value;
    const assignee: User = this.addBugsForm.get('bugAssignee').value;
    const reporter: User = this.addBugsForm.get('bugReporter').value;

    this.testCaseService.getSingleTestCase(testCase.id).subscribe(tc => {
      this.featureService.getSingleFeature(feature.id).subscribe(fe => {
        this.userService.getSingleUser(assignee.id).subscribe(assi => {
          this.userService.getSingleUser(reporter.id).subscribe(re => {
            let newBug = new Bugs(
                this.addBugsForm.get('bugTitle').value, this.addBugsForm.get('bugDescription').value,
                sprint.id, sprint.sprintName, tc.id, tc.testCaseTitle, this.currentPro.id, fe.id, fe.featureName,
                assi.id, assi.userFname, assi.userLName, this.addBugsForm.get('bugSeverity').value, this.addBugsForm.get('bugPriority').value,
                this.addBugsForm.get('bugStatus').value, re.id, re.userFname, re.userLName, this.addBugsForm.get('bugEnvironment').value,
                this.addBugsForm.get('bugStepToReproduce').value, new Date(), null);

            this.bugService.addBug(newBug).subscribe(
                re => this.displaySuccessMessageView(),
                err => this.displayErrorView()
            );

            setTimeout(() => {
              this.bugService.getAllBugs().subscribe(bugs =>
                  this.bugService.changeCurrentBugs(bugs)
              )}, 2000);
          })
        })
      })
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
  clearForm() {
    this.addBugsForm.reset();
  }
}
