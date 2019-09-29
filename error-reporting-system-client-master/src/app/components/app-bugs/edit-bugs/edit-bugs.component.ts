import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BugDto} from '../../../models/dto/BugDto';
import {AppBugsComponent} from '../app-bugs.component';
import {FeatureService} from '../../../services/feature.service';
import {UserService} from '../../../services/user.service';
import {TestCaseService} from '../../../services/test-case.service';
import {BugService} from '../../../services/bug.service';
import {TestCaseDto} from '../../../models/dto/TestCaseDto';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Feature} from '../../../models/feature';
import {TestCase} from '../../../models/TestCase';
import {Epic} from '../../../models/epic';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sprint} from '../../../models/Sprint';
import {Bugs} from '../../../models/Bugs';
import {SprintService} from '../../../services/sprint.service';
import {CommonService} from '../../../services/common.service';
import {Projects} from '../../../models/Projects';

@Component({
  selector: 'app-edit-bugs',
  templateUrl: './edit-bugs.component.html',
  styleUrls: ['./edit-bugs.component.scss']
})
export class EditBugsComponent implements OnInit {

  constructor(
      @Inject(MAT_DIALOG_DATA) private bugDto: BugDto,
      public featureService: FeatureService,
      public userService: UserService,
      private sprintService: SprintService,
      private commonService: CommonService,
      private testCaseService: TestCaseService,
      private bugService: BugService) { }

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
  existingBug: Bugs;
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(user => this.userAutocomplete(user));
    this.featureService.getAllFeatures().subscribe(fea => this.featureAutoComplete(fea));
    this.testCaseService.getAllTestCases().subscribe(te => this.testCaseAutoComplete(te));
    this.bugService.getSingleBug(this.bugDto.id).subscribe(bu => this.existingBug = bu);
    this.sprintService.getAllSprints().subscribe(sp => {
      let spr: Sprint[] = [];
      for (let s of sp)
        if (s.sprintProjectId === this.currentPro.id)
          spr.push(s);
      this.sprintAutocomplete(spr)
    });
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }

  testCaseAutoComplete(tc: TestCase[]) {
    this.filteredTestCases = this.editBugsForm.get('bugTestCase').valueChanges
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
    this.filteredFeatures = this.editBugsForm.get('bugFeature').valueChanges
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
    this.filteredAssignee = this.editBugsForm.get('bugAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterUser(name, fe) : fe.slice())
        );
    this.filteredReporter = this.editBugsForm.get('bugReporter').valueChanges
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
    this.filteredSprints = this.editBugsForm.get('bugSprint').valueChanges
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

  updateSuccessMsgView = false;
  editView = false;
  displayView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;
  editBugsForm = new FormGroup({
    bugTitle: new FormControl(this.bugDto.bugTitle, Validators.required),
    bugDescription: new FormControl(this.bugDto.bugDescription),
    bugSprint: new FormControl(this.bugDto.bugSprint),
    bugTestCase: new FormControl(this.bugDto.bugTestCase, Validators.required),
    bugFeature: new FormControl(this.bugDto.bugFeature, Validators.required),
    bugAssignee: new FormControl(this.bugDto.bugAssignee, Validators.required),
    bugSeverity: new FormControl(this.bugDto.bugSeverity, Validators.required),
    bugPriority: new FormControl(this.bugDto.bugPriority, Validators.required),
    bugStatus: new FormControl(this.bugDto.bugStatus, Validators.required),
    bugReporter: new FormControl(this.bugDto.bugReporter, Validators.required),
    bugEnvironment: new FormControl(this.bugDto.bugEnvironment, Validators.required),
    bugStepToReproduce: new FormControl(this.bugDto.bugStepToReproduce),
  });
  updateBug() {
    if (this.editBugsForm.invalid) {
      return;
    }

    const testCase: TestCase = this.editBugsForm.get('bugTestCase').value;
    const sprint: Sprint = this.editBugsForm.get('bugSprint').value;
    const feature: Feature = this.editBugsForm.get('bugFeature').value;
    const assignee: User = this.editBugsForm.get('bugAssignee').value;
    const reporter: User = this.editBugsForm.get('bugReporter').value;

    this.testCaseService.getSingleTestCase(testCase.id).subscribe(tc => {
      this.featureService.getSingleFeature(feature.id).subscribe(fe => {
        this.userService.getSingleUser(assignee.id).subscribe(assi => {
          this.userService.getSingleUser(reporter.id).subscribe(re => {
            this.existingBug.bugTitle = this.editBugsForm.get('bugTitle').value;
            this.existingBug.bugDescription = this.editBugsForm.get('bugDescription').value;
            this.existingBug.bugSprintId = sprint.id;
            this.existingBug.bugSprintName = sprint.sprintName;
            this.existingBug.bugTestCaseId = tc.id;
            this.existingBug.bugTestCaseName = tc.testCaseTitle;
            this.existingBug.bugProjectId = this.currentPro.id;
            this.existingBug.bugFeatureId = fe.id;
            this.existingBug.bugFeatureName = fe.featureName;
            this.existingBug.bugAssigneeId = assi.id;
            this.existingBug.bugAssigneeFName = assi.userFname;
            this.existingBug.bugAssigneeLName = assi.userLName;
            this.existingBug.bugSeverity = this.editBugsForm.get('bugSeverity').value;
            this.existingBug.bugPriority = this.editBugsForm.get('bugPriority').value;
            this.existingBug.bugStatus = this.editBugsForm.get('bugStatus').value;
            this.existingBug.bugReporterId = re.id;
            this.existingBug.bugReporterFName = re.userFname;
            this.existingBug.bugReporterLName = re.userLName;
            this.existingBug.bugEnvironment = this.editBugsForm.get('bugEnvironment').value;
            this.existingBug.bugStepToReproduce = this.editBugsForm.get('bugStepToReproduce').value;
            this.existingBug.bugUpdatedDate = new Date();

            this.bugService.updateBug(this.existingBug).subscribe(
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
  deleteBug() {
    this.bugService.deleteBug(this.existingBug.id).subscribe(
        re => this.displayDeleteSuccessView(),
        err => this.displayErrorView()
    );

    setTimeout(() => {
      this.bugService.getAllBugs().subscribe(bugs =>
          this.bugService.changeCurrentBugs(bugs)
      )}, 2000);
  }
  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = false;
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
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = true;
    this.displayView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayEditView() {
    this.updateSuccessMsgView = false;
    this.editView = true;
    this.errorMsgView = false;
    this.displayView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearForm() {
    this.editBugsForm.reset();
  }
}
