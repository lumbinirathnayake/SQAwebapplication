import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {CommonService} from '../../services/common.service';
import {Story} from '../../models/Story';
import {Projects} from '../../models/Projects';
import {StoryDto} from '../../models/dto/StoryDto';
import {EditStoryComponent} from '../app-story/edit-story/edit-story.component';
import {MatDialog} from '@angular/material';
import {FeatureService} from '../../services/feature.service';
import {ProjectsService} from '../../services/projects.service';
import {EpicService} from '../../services/epic.service';
import {UserService} from '../../services/user.service';
import {SprintService} from '../../services/sprint.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.scss']
})
export class AppWelcomeComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private commonService: CommonService,
              private featureService: FeatureService,
              private projectService: ProjectsService,
              private epicService: EpicService,
              private userService: UserService,
              private storyService: StoryService,
              private sprintService: SprintService) { }

  allStories: Story[];
  currentProject: Projects;
  disAssignedStories = false;
  currentUser: User;
  disUnassign = false;
  ngOnInit() {
    this.commonService.currentProject.subscribe(pro => {
      if (pro !== undefined) {
        this.commonService.currentUser.subscribe(us => this.currentUser = us);
        this.displayAssignedStories(pro)
      }
    });
  }

  displayAssignedStories(pro: Projects) {
    this.currentProject = pro;
    this.storyService.getAllStories().subscribe(str => {
      let stories: Story[] = [];
      for (let st of str) {
        if (st.storyAssigneeId === this.currentUser.id)
          stories.push(st);
      }
      if (stories.length === 0) {
        this.disUnassign = true;
      } else {
        this.allStories = stories;
        this.disAssignedStories = true;
      }
    });
  }
  viewStory(story: Story) {
    this.projectService.getSingleProjects(story.storyProjectId).subscribe(pro => {
      this.epicService.getSingleEpic(story.storyEpicId).subscribe(ep => {
        this.featureService.getSingleFeature(story.storyFeatureId).subscribe(fe => {
          this.userService.getSingleUser(story.storyAssigneeId).subscribe(assi => {
            this.userService.getSingleUser(story.storyReporterId).subscribe(re => {
              this.sprintService.getSingleSprint(story.storySprintId).subscribe(spr => {
                let newStoryDto = new StoryDto(
                    story.id, story.storyName, pro, ep, fe, spr, story.storySummery,
                    story.storyDescription, story.storyPoints, story.storyStartDate, story.storyEndDate,
                    re, assi, story.storyStatus, story.storyCreatedDate, story.storyUpdatedDate
                );

                this.dialog.open(EditStoryComponent, {data: newStoryDto});
              })
            })
          })
        })
      })
    })
  }

}
