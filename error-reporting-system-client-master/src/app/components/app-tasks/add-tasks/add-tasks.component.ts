import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatCheckboxChange, MatDialog, MatDialogRef} from '@angular/material';
import {AppTestCaseComponent} from '../../app-test-case/app-test-case.component';
import {TestCaseFeatureGroup} from '../../../models/other/TestCaseFeatureGroup';
import {TestCaseService} from '../../../services/test-case.service';
import {FeatureService} from '../../../services/feature.service';
import {CommonService} from '../../../services/common.service';
import {UserService} from '../../../services/user.service';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Projects} from '../../../models/Projects';
import {map, startWith} from 'rxjs/operators';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TestCase} from '../../../models/TestCase';
import {TasksService} from '../../../services/tasks.service';
import {StoryService} from '../../../services/story.service';
import {Tasks} from '../../../models/Tasks';
import {Story} from '../../../models/Story';
import {Sprint} from '../../../models/Sprint';
import {SprintService} from '../../../services/sprint.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
  constructor(
      private taskService: TasksService,
      private dialogPopup: MatDialog,
      private testCaseService: TestCaseService,
      private storyService: StoryService,
      private featureService: FeatureService,
      private commonService: CommonService,
      private userService: UserService,
      private sprintService: SprintService) { }

  taskStatus: CommonJson[] = [
    {value: 'fail', name: 'Fail'},
    {value: 'block', name: 'Block'},
    {value: 'not executed', name: 'Not Executed'},
    {value: 'pass', name: 'Pass'},
    {value: 'work in progress', name: 'Work In Progress'},
  ];
  filteredAssignee: Observable<User[]>;
  filteredCreators: Observable<User[]>;
  filteredSprints: Observable<Sprint[]>;
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(use => {
      this.assigneeAutocomplete(use);
      this.creatorAutocomplete(use)
    });
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    this.sprintService.getAllSprints().subscribe(sp => {
      let spr: Sprint[] = [];
      for (let s of sp)
        if (s.sprintProjectId === this.currentPro.id)
          spr.push(s);
      this.sprintAutocomplete(spr)
    });
  }

  sprintAutocomplete(sprints: Sprint[]) {
    this.filteredSprints = this.addTaskForm.get('taskSprint').valueChanges
        .pipe(
            startWith<string | Sprint>(''),
            map(value => typeof value === 'string' ? value : value.sprintName),
            map(name => name ? this._filterSprint(name, sprints) : sprints.slice())
        );
  }
  private _filterSprint(name: string, fe: Sprint[]): Sprint[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        sp => sp.sprintName.toLowerCase().indexOf(filterValue) === 0);
  }
  displaySprintAutocomplete(sprint: Sprint): string | undefined {
    return sprint ? sprint.sprintName : undefined;
  }

  assigneeAutocomplete(use: User[]) {
    this.filteredAssignee = this.addTaskForm.get('taskAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterAssignee(name, use) : use.slice())
        );
  }
  private _filterAssignee(name: string, fe: User[]): User[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.userFname.toLowerCase().indexOf(filterValue) === 0);
  }
  displayAssigneeAutocomplete(user: User): string | undefined {
    const userFullName = user.userFname + ' ' + user.userLName;
    return user ? userFullName : undefined;
  }

  creatorAutocomplete(use: User[]) {
    this.filteredCreators = this.addTaskForm.get('taskCreator').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterCreator(name, use) : use.slice())
        );
  }
  private _filterCreator(name: string, fe: User[]): User[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.userFname.toLowerCase().indexOf(filterValue) === 0);
  }
  displayCreatorAutocomplete(user: User): string | undefined {
    const userFullName = user.userFname + ' ' + user.userLName;
    return user ? userFullName : undefined;
  }

  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;
  addTaskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskSummery: new FormControl('', Validators.required),
    taskDescription: new FormControl(''),
    taskAssignee: new FormControl(''),
    taskCreator: new FormControl('', Validators.required),
    taskStartDate: new FormControl({value: '', disabled: true}),
    taskEndDate: new FormControl({value: '', disabled: true}),
    taskStatus: new FormControl(''),
    taskEstimatedTime: new FormControl(''),
    taskSprint: new FormControl('', Validators.required)
  });
  saveTasks() {
    if (this.addTaskForm.invalid)
      return;

    const assignee: User = this.addTaskForm.get('taskAssignee').value;
    const creator: User = this.addTaskForm.get('taskCreator').value;
    const taskStory: Story = this.taskService.selectedTaskStory;
    const sprint: Sprint = this.addTaskForm.get('taskSprint').value;

    this.featureService.getSingleFeature(taskStory.storyFeatureId).subscribe(fea => {
      let newTask = new Tasks(
          this.addTaskForm.get('taskName').value, this.currentPro.id, taskStory.id,
          taskStory.storyName, fea.id, fea.featureName, sprint.id, sprint.sprintName,
          this.addTaskForm.get('taskSummery').value, this.addTaskForm.get('taskDescription').value,
          this.addTaskForm.get('taskStartDate').value, this.addTaskForm.get('taskEndDate').value,
          assignee.id, assignee.userFname, assignee.userLName, creator.id, creator.userFname,
          creator.userLName, this.addTaskForm.get('taskStatus').value, this.addTaskForm.get('taskEstimatedTime').value,
          null, new Date(), null
      );

      this.taskService.addTasks(newTask).subscribe(
          re => this.displaySuccessMessageView(),
          er => this.displayErrorView()
      );

      setTimeout(() => {
        this.taskService.getAllTasks().subscribe(ts =>
            this.taskService.changeTasks(ts)
        )}, 2000);
    })

  }
  displaySuccessMessageView() {
    this.createView = false;
    this.createSuccessMsgView = true;
    this.errorMsgView = false;
  }
  displayErrorView() {
    this.createView = false;
    this.createSuccessMsgView = false;
    this.errorMsgView = true;
  }
  clearform() {
    this.addTaskForm.reset();
  }

}
