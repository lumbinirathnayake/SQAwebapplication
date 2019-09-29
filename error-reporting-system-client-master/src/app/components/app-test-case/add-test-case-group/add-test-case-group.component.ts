import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {TestCaseFeatureGroup} from '../../../models/other/TestCaseFeatureGroup';
import {TestCaseFeatureGroupService} from '../../../services/test-case-feature-group.service';

@Component({
  selector: 'app-add-test-case-group',
  templateUrl: './add-test-case-group.component.html',
  styleUrls: ['./add-test-case-group.component.scss']
})
export class AddTestCaseGroupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TestCaseFeatureGroup,
              private testCaseFeatureGroupService: TestCaseFeatureGroupService) { }

  ngOnInit() {
  }
  deleteWarnView = true;
  deleteSuccessView = false;
  errorMsgView = false;

  deleteFeatureGroup() {
    this.testCaseFeatureGroupService.deleteTestCaseFeatureGroup(this.data.id).subscribe(
        res => this.displayDeleteSuccessMsg(),
        error1 => this.displayErrorMsg()
    );

    setTimeout(() => {
      this.testCaseFeatureGroupService.getAllTestCaseFeatureGroup().subscribe(fe =>
          this.testCaseFeatureGroupService.changeTestCaseFeatureGroup(fe)
      )}, 2000);
  }

  displayDeleteSuccessMsg() {
    this.deleteWarnView = false;
    this.deleteSuccessView = true;
    this.errorMsgView = false;
  }

  displayErrorMsg() {
    this.deleteWarnView = false;
    this.deleteSuccessView = false;
    this.errorMsgView = true;
  }
}
