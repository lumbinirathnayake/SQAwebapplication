import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddProjectsComponent} from './add-projects/add-projects.component';
import {Projects} from '../../models/Projects';
import {ProjectsService} from '../../services/projects.service';
import {EditProjectsComponent} from './edit-projects/edit-projects.component';
import {ProjectDto} from '../../models/dto/ProjectDto';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.scss']
})
export class AppProjectsComponent implements OnInit {

  constructor(
      public dialog: MatDialog,
      public userService: UserService,
      public projectService: ProjectsService) { }

  allProjects: Projects[];
  projectSearchForm = new FormGroup({
    projectSearch: new FormControl('')
  });
  ngOnInit() {
    this.projectService.currentProjects.subscribe(data => {
      if (data.length === 0) {
        this.projectService.getAllProjects().subscribe(pro =>
            this.allProjects = pro);
      } else {
        this.allProjects = data
      }
    });
  }

  openAddProjectModel() {
    this.dialog.open(AddProjectsComponent);
  }

  editProject(project: Projects) {
    // TODO need to get the proCreatorId first and pass first
    this.userService.getSingleUser(project.proLeadId).subscribe(cre =>
      this.userService.getSingleUser(project.proLeadId).subscribe((lead: User) => {
        let proDto: ProjectDto = new ProjectDto(
            project.id, project.proName, project.proType, project.proDescription, project.proUsers,
            cre, lead, project.proStartedDate, project.proEndDate, project.proCreatedDate, project.proUpdatedDate
        );
        this.dialog.open(EditProjectsComponent, {data: proDto});
      })
    );
  }
}
