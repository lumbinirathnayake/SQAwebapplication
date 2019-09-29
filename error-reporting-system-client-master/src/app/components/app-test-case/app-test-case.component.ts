import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddTestCaseComponent} from './add-test-case/add-test-case.component';
import {Feature} from '../../models/feature';
import {FeatureService} from '../../services/feature.service';
import {AddTestCaseGroupComponent} from './add-test-case-group/add-test-case-group.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TestCaseFeatureGroup} from '../../models/other/TestCaseFeatureGroup';
import {TestCaseFeatureGroupService} from '../../services/test-case-feature-group.service';
import {TestCase} from '../../models/TestCase';
import {TestCaseService} from '../../services/test-case.service';
import {EditTestCaseComponent} from './edit-test-case/edit-test-case.component';
import {UserService} from '../../services/user.service';
import {TestCaseDto} from '../../models/dto/TestCaseDto';
import {Projects} from '../../models/Projects';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-app-test-case',
  templateUrl: './app-test-case.component.html',
  styleUrls: ['./app-test-case.component.scss']
})
export class AppTestCaseComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private featureService: FeatureService,
              private testCaseFeatureGroupService: TestCaseFeatureGroupService,
              private testCaseService: TestCaseService,
              private commonService: CommonService,
              private userService: UserService) { }

  curentFeatures: Feature[];
  currentFeatureGroups: TestCaseFeatureGroup[];
  currentTestCases: TestCase[];
  currectPro: Projects;
  testCaseSearchForm = new FormGroup({
    testCaseSearch: new FormControl('')
  });
  ngOnInit() {
    this.featureService.currentFeatures.subscribe(fea => {
      if (fea.length === 0) {
        this.featureService.getAllFeatures().subscribe(fe => {
          this.curentFeatures = fe;
        });
      } else
        this.curentFeatures = fea;
    });
    this.testCaseFeatureGroupService.currentTestCaseFeatureGroup.subscribe(tcg => {
      if (tcg === null || tcg.length === 0 ) {
        this.testCaseFeatureGroupService.getAllTestCaseFeatureGroup().subscribe(tc =>
            this.currentFeatureGroups = tc
        )
      } else {
        this.currentFeatureGroups = tcg;
      }
    });
    this.testCaseService.currentTestCases.subscribe(tc => {
      if (tc.length === 0 ) {
        this.testCaseService.getAllTestCases().subscribe(t =>
            this.currentTestCases = t
        )
      } else {
        this.currentTestCases = tc;
      }
    });
    this.commonService.currentProject.subscribe(pro => this.currectPro = pro);
  }


  addNewTestCase(feaGrp: TestCaseFeatureGroup) {
    this.dialog.open(AddTestCaseComponent, {data: feaGrp});
  }

  testCaseFeatureGroupForm = new FormGroup({
    testCaseFeatureGroupName: new FormControl(''),
  });

  addTestCaseGroup(fea: Feature) {
    let newFormGroup: TestCaseFeatureGroup = new TestCaseFeatureGroup( fea.id,
        this.testCaseFeatureGroupForm.get('testCaseFeatureGroupName').value, null);

    this.testCaseFeatureGroupService.addTestCaseFeatureGroup(newFormGroup).subscribe(
        re => this.testCaseFeatureGroupForm.reset()
    );

    setTimeout(() => {
      this.testCaseFeatureGroupService.getAllTestCaseFeatureGroup().subscribe(fe =>
          this.testCaseFeatureGroupService.changeTestCaseFeatureGroup(fe)
      )}, 2000);
  }

  deleteFeatureGroup(feaGrp: TestCaseFeatureGroup) {
    this.dialog.open(AddTestCaseGroupComponent, {data: feaGrp})
  }

  editTestCase(testCase: TestCase) {
    this.featureService.getSingleFeature(testCase.testCaseFeatureId).subscribe(fea =>
      this.userService.getSingleUser(testCase.testCaseAssigneeId).subscribe(ass =>
        this.userService.getSingleUser(testCase.testCaseCreatorId).subscribe(cre => {
          let testCaseDto = new TestCaseDto(testCase.id, testCase.testCaseTitle, testCase.testCaseProjectId,
              fea, testCase.testCasePriority, testCase.testCaseStatus, testCase.testCaseSeverity,
              ass, testCase.testCaseAutomationStatus, testCase.testCaseType, cre,
              testCase.testCaseTestStep, testCase.testCaseExpectedResult, testCase.testCaseCreatedDate,
              testCase.testCaseUpdatedDate);
          this.dialog.open(EditTestCaseComponent, {data: testCaseDto});
        })
      )
    );
  }

  testCaseStatus(testCase: TestCase, name: string) {
    for (let tc of testCase.testCaseType) {
      if (name === tc)
        return true;
    }
    return false;
  }
}
