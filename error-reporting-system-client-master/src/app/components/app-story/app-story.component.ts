import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddStoryComponent} from './add-story/add-story.component';
import {Story} from '../../models/Story';
import {StoryService} from '../../services/story.service';
import {Projects} from '../../models/Projects';
import {CommonService} from '../../services/common.service';
import {Epic} from '../../models/epic';
import {FeatureService} from '../../services/feature.service';
import {ProjectsService} from '../../services/projects.service';
import {EpicService} from '../../services/epic.service';
import {UserService} from '../../services/user.service';
import {StoryDto} from '../../models/dto/StoryDto';
import {EditStoryComponent} from './edit-story/edit-story.component';
import {FormControl, FormGroup} from '@angular/forms';
import {SprintService} from '../../services/sprint.service';

@Component({
  selector: 'app-app-story',
  templateUrl: './app-story.component.html',
  styleUrls: ['./app-story.component.scss']
})
export class AppStoryComponent implements OnInit {
  allEpics: any;
  currentProject: Projects;

  constructor(private dialog: MatDialog,
              private commonService: CommonService,
              private featureService: FeatureService,
              private projectService: ProjectsService,
              private epicService: EpicService,
              private userService: UserService,
              private storyService: StoryService,
              private sprintService: SprintService) { }

  allStories: Story[];
  storySearchForm = new FormGroup({
      storySearch: new FormControl('')
  });
  ngOnInit() {
    this.storyService.currentStories.subscribe(st => {
      if (st.length === 0) {
        this.storyService.getAllStories().subscribe(s => {
          this.allStories = s;
        })
      } else
        this.allStories = st;
    });
    this.commonService.currentProject.subscribe(pro => this.currentProject = pro);
  }

    addNewStory() {
        this.dialog.open(AddStoryComponent);
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
