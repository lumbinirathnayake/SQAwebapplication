import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {Story} from '../../models/Story';
import {MatDialog} from '@angular/material';
import {AddTasksComponent} from '../app-tasks/add-tasks/add-tasks.component';
import {EditTasksComponent} from '../app-tasks/edit-tasks/edit-tasks.component';
import {ViewTasksComponent} from '../app-tasks/view-tasks/view-tasks.component';
import {Tasks} from '../../models/Tasks';
import {TasksService} from '../../services/tasks.service';
import {UserService} from '../../services/user.service';
import {TaskDto} from '../../models/dto/TaskDto';
import {AddSprintComponent} from '../app-sprint/add-sprint/add-sprint.component';
import {SprintService} from '../../services/sprint.service';
import {Sprint} from '../../models/Sprint';
import {EditSprintComponent} from '../app-sprint/edit-sprint/edit-sprint.component';
import {SprintDto} from '../../models/dto/SprintDto';
import {Projects} from '../../models/Projects';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-app-sprint-board',
  templateUrl: './app-sprint-board.component.html',
  styleUrls: ['./app-sprint-board.component.scss']
})
export class AppSprintBoardComponent implements OnInit {

  constructor(private storyService: StoryService,
              private userService: UserService,
              private dialog: MatDialog,
              private tasksService: TasksService,
              private commonService: CommonService,
              private sprintService: SprintService) { }

  allStories: Story[];
  allTasks: Tasks[];
  allSprints: Sprint[];
  currentStory: Story;
  displayStories = false;
  currentPro: Projects;
  selectedSprintObj: Sprint;
  currentSprintName: string = 'Please select a sprint';
  ngOnInit() {
    this.storyService.currentStories.subscribe(str => {
      if (str.length === 0) {
        this.storyService.getAllStories().subscribe(s => {
          this.allStories = s;
          this.currentStory = s[0];
        })
      } else {
        this.allStories = str;
        this.currentStory = str[0];
      }
    });
    this.tasksService.currentTasks.subscribe(ts => {
      if (ts.length === 0)
        this.tasksService.getAllTasks().subscribe(t =>
          this.allTasks = t
        )
      else
        this.allTasks = ts
    });
    this.sprintService.currentSprints.subscribe(sp => {
      if (sp.length === 0)
        this.sprintService.getAllSprints().subscribe(s => this.allSprints = s);
      else
        this.allSprints = sp;
    });
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }

  selectedSprint(sprint: Sprint) {
    this.currentSprintName = sprint.sprintName;
    this.selectedSprintObj = sprint;
    this.displayStories = true;
  }

  openAddTasks() {
    this.dialog.open(AddTasksComponent)
  }

  openEditTasks(task: Tasks) {
    this.sprintService.getSingleSprint(task.taskSprintId).subscribe(spr => {
      this.userService.getSingleUser(task.taskAssigneeId).subscribe(assi => {
        this.userService.getSingleUser(task.taskCreattorId).subscribe(cre => {
          let taskDto: TaskDto = new TaskDto(
              task.id, task.taskName, task.taskProjectId, task.taskStoryId, task.taskStoryName,
              task.taskFeatureId, task.taskFeatureName, spr,
              task.taskSummery, task.taskDescription, task.taskStartDate, task.taskEndDate,
              assi, cre, task.taskStatus, task.taskEstimatedTime, task.taskRemainingTime,
              task.taskLoggedTime, task.taskCreatedDate, task.taskUpdatedDate);
          this.dialog.open(EditTasksComponent, {data: taskDto})
        });
      })
    });
  }

  openViewTasks(task: Tasks) {
    this.dialog.open(ViewTasksComponent, {data: task})
  }

  drawerMood = 'side';
    drawerData(story: Story) {
      this.currentStory = story;
      this.tasksService.changeSelectedTasksStory(this.currentStory);
        return true;
    }

    addSprintPopup() {
        this.dialog.open(AddSprintComponent)
    }

  editSprintView(sprint: Sprint) {
    this.userService.getSingleUser(sprint.sprintCreatorId).subscribe(cre => {
      let sprintDto: SprintDto = new SprintDto(
          sprint.id, sprint.sprintName, sprint.sprintSummery, sprint.sprintDescription,
          sprint.sprintProjectId, cre, sprint.sprintStatus, sprint.sprintStartDate,
          sprint.sprintEndDate, sprint.sprintCreatedDate, sprint.sprintUpdatedDate
      );
      this.dialog.open(EditSprintComponent, {data: sprintDto})
    });
  }
}
