import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddTestCaseComponent} from '../app-test-case/add-test-case/add-test-case.component';
import {AddFeatureComponent} from './add-feature/add-feature.component';
import {FeatureService} from '../../services/feature.service';
import {Feature} from '../../models/feature';
import {EditFeatureComponent} from './edit-feature/edit-feature.component';
import {FeatureDto} from '../../models/dto/FeatureDto';
import {EpicService} from '../../services/epic.service';
import {UserService} from '../../services/user.service';
import {CommonService} from '../../services/common.service';
import {Projects} from '../../models/Projects';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(
      public addCreateFeaturePopup: MatDialog,
      public featureService: FeatureService,
      public epicService: EpicService,
      private commonService: CommonService,
      public userService: UserService) { }

      featureSearchForm = new FormGroup({
        fearureSearch: new FormControl('')
      });
  ngOnInit() {
    this.getAllFeatures();
  }

  allFeatures: Feature[];
  currentPro: Projects;
  getAllFeatures() {
    this.featureService.currentFeatures.subscribe(features => {
      if (features.length === 0) {
        this.featureService.getAllFeatures().subscribe( f => this.allFeatures = f);
      } else {
        this.allFeatures = features;
      }
      this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    });
  }

  addNewFeature() {
    const addTestCasePopupModule = this.addCreateFeaturePopup.open(AddFeatureComponent);
  }

  viewFeature(feature: Feature) {
    this.epicService.getSingleEpic(feature.featureEpicId).subscribe(ep => {
      this.userService.getSingleUser(feature.featureAssigneeId).subscribe(use => {
        let featureDto = new FeatureDto(
            feature.id, ep, feature.featureProjectId, feature.featureName, feature.featureSummary, feature.featureDescription,
            use, feature.featureStatus, feature.featureStartDate, feature.featureEndDate, feature.featureCreatedDate,
            feature.featureUpdatedDate);
        this.addCreateFeaturePopup.open(EditFeatureComponent, {data: featureDto});
      });
    });
  }
}
