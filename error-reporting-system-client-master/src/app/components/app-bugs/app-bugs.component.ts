import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddBugsComponent} from './add-bugs/add-bugs.component';
import {Feature} from '../../models/feature';
import {Bugs} from '../../models/Bugs';
import {BugService} from '../../services/bug.service';
import {TestCaseService} from '../../services/test-case.service';
import {ProjectsService} from '../../services/projects.service';
import {FeatureService} from '../../services/feature.service';
import {UserService} from '../../services/user.service';
import {BugDto} from '../../models/dto/BugDto';
import {EditBugsComponent} from './edit-bugs/edit-bugs.component';
import {Projects} from '../../models/Projects';
import {CommonService} from '../../services/common.service';
import {SprintService} from '../../services/sprint.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-app-bugs',
  templateUrl: './app-bugs.component.html',
  styleUrls: ['./app-bugs.component.scss']
})
export class AppBugsComponent implements OnInit {

  constructor(
      private dialog: MatDialog,
      private bugService: BugService,
      private testCaseService: TestCaseService,
      private projectService: ProjectsService,
      private featureService: FeatureService,
      private userService: UserService,
      private sprintService: SprintService,
      private commonService: CommonService
  ) { }

  currentPro: Projects;
  bugSearchForm = new FormGroup({
    bugSearch: new FormControl('')
  });
  ngOnInit() {
    this.getAllFeatures();
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }

  allBugs: Bugs[];
  getAllFeatures() {
    this.bugService.currentBugs.subscribe(bugs => {
      if (bugs.length === 0) {
        this.bugService.getAllBugs().subscribe( f => this.allBugs = f);
      } else {
        this.allBugs = bugs;
      }
    });
  }

  addNewBug() {
    this.dialog.open(AddBugsComponent);
  }

  viewBug(bug: Bugs) {
    this.sprintService.getSingleSprint(bug.bugSprintId).subscribe(sp =>
        this.testCaseService.getSingleTestCase(bug.bugTestCaseId).subscribe(tc =>
            this.featureService.getSingleFeature(bug.bugFeatureId).subscribe(fe =>
                this.userService.getSingleUser(bug.bugAssigneeId).subscribe(assi =>
                    this.userService.getSingleUser(bug.bugReporterId).subscribe(re => {
                      this.projectService.getSingleProjects(bug.bugProjectId).subscribe(pro => {
                        let bugDto = new BugDto(
                            bug.id, bug.bugTitle, bug.bugDescription, sp, tc, pro,
                            fe, assi, bug.bugSeverity, bug.bugPriority, bug.bugStatus, re, bug.bugEnvironment,
                            bug.bugStepToReproduce, bug.bugCreatedDate, bug.bugUpdatedDate
                        );
                        this.dialog.open(EditBugsComponent, {data: bugDto})
                      })
                    })
                )
            )
        )
    );
  }
}
