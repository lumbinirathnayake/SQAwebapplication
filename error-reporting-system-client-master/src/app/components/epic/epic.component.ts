import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {FeatureService} from '../../services/feature.service';
import {AddFeatureComponent} from '../feature/add-feature/add-feature.component';
import {Feature} from '../../models/feature';
import {EditFeatureComponent} from '../feature/edit-feature/edit-feature.component';
import {AddEpicComponent} from './add-epic/add-epic.component';
import {Epic} from '../../models/epic';
import {EpicService} from '../../services/epic.service';
import {EditEpicComponent} from './edit-epic/edit-epic.component';
import {UserService} from '../../services/user.service';
import {EpicDto} from '../../models/dto/EpicDto';
import {Projects} from '../../models/Projects';
import {CommonService} from '../../services/common.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {

  constructor(
      public dialog: MatDialog,
      public userService: UserService,
      public epicService: EpicService,
      private commonService: CommonService,
      ) { }

      currentProject: Projects;
  epicSearchForm = new FormGroup({
    epicSearch: new FormControl('')
  });
  ngOnInit() {
    this.getAllEpics();

  }

  addNewEpic() {
    const addTestCasePopupModule = this.dialog.open(AddEpicComponent);
  }

  allEpics: Epic[];
  getAllEpics() {
    this.epicService.currentEpics.subscribe(epics => {
      if (epics.length === 0) {
        this.epicService.getAllEpics().subscribe(ep =>
            this.allEpics = ep
        );
      } else
        this.allEpics = epics;
      this.commonService.currentProject.subscribe(pro => this.currentProject = pro);
    });
  }

  viewEpics(epic: Epic) {
    this.userService.getSingleUser(epic.epicAssigneeId).subscribe(usec=> {
      const epicDto: EpicDto = new EpicDto(
          epic.id, epic.proId, epic.epicName, epic.epicDescription, epic.epicSummery,
          usec, epic.epicStatus, epic.epicStartDate, epic.epicEndDate, epic.epicCreatedDate, epic.epicUpdatedDate);

      this.dialog.open(EditEpicComponent, {data: epicDto});
    });
  }

}
