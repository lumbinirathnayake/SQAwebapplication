import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {TaskDto} from '../../../models/dto/TaskDto';
import {TasksService} from '../../../services/tasks.service';
import {TestCaseService} from '../../../services/test-case.service';
import {StoryService} from '../../../services/story.service';
import {FeatureService} from '../../../services/feature.service';
import {CommonService} from '../../../services/common.service';
import {UserService} from '../../../services/user.service';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Projects} from '../../../models/Projects';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Story} from '../../../models/Story';
import {Tasks} from '../../../models/Tasks';
import {Sprint} from '../../../models/Sprint';
import {SprintService} from '../../../services/sprint.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.scss']
})
export class EditTasksComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private taskDto: TaskDto,
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
  existingTask: Tasks;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(use => {
      this.assigneeAutocomplete(use);
      this.creatorAutocomplete(use)
    });
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    this.taskService.getSingleTask(this.taskDto.id).subscribe(ts => this.existingTask = ts);
    this.sprintService.getAllSprints().subscribe(sp => {
      let spr: Sprint[] = [];
      for (let s of sp)
        if (s.sprintProjectId === this.currentPro.id)
          spr.push(s);
        console.log(spr);
      this.sprintAutocomplete(spr);
    });
  }

  sprintAutocomplete(sprints: Sprint[]) {
    this.filteredSprints = this.editTaskForm.get('taskSprint').valueChanges
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
    this.filteredAssignee = this.editTaskForm.get('taskAssignee').valueChanges
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
    this.filteredCreators = this.editTaskForm.get('taskCreator').valueChanges
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

  updateSuccessMsgView = false;
  editView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;
  editTaskForm = new FormGroup({
    taskName: new FormControl(this.taskDto.taskName, Validators.required),
    taskSummery: new FormControl(this.taskDto.taskSummery, Validators.required),
    taskDescription: new FormControl(this.taskDto.taskDescription),
    taskAssignee: new FormControl(this.taskDto.taskAssignee, Validators.required),
    taskCreator: new FormControl(this.taskDto.taskCreattor, Validators.required),
    taskStartDate: new FormControl({value: this.taskDto.taskStartDate, disabled: true}),
    taskEndDate: new FormControl({value: this.taskDto.taskEndDate, disabled: true}),
    taskStatus: new FormControl(this.taskDto.taskStatus),
    taskEstimatedTime: new FormControl(this.taskDto.taskEstimatedTime),
    taskSprint: new FormControl(this.taskDto.taskSprint, Validators.required)
  });
  updateTasks() {
    if (this.editTaskForm.invalid)
      return;

    const assignee: User = this.editTaskForm.get('taskAssignee').value;
    const creator: User = this.editTaskForm.get('taskCreator').value;
    const taskStory: Story = this.taskService.selectedTaskStory;
    const sprint: Sprint = this.editTaskForm.get('taskSprint').value;

    this.existingTask.taskName = this.editTaskForm.get('taskName').value;
    this.existingTask.taskSummery = this.editTaskForm.get('taskSummery').value;
    this.existingTask.taskDescription = this.editTaskForm.get('taskDescription').value;
    this.existingTask.taskAssigneeId = assignee.id;
    this.existingTask.taskAssigneeFName = assignee.userFname;
    this.existingTask.taskAssigneeLName = assignee.userLName;
    this.existingTask.taskCreattorId = creator.id;
    this.existingTask.taskSprintId = sprint.id;
    this.existingTask.taskSprintName = sprint.sprintName;
    this.existingTask.taskCreattorFName = creator.userFname;
    this.existingTask.taskCreattorLName = creator.userLName;
    this.existingTask.taskStartDate = this.editTaskForm.get('taskStartDate').value;
    this.existingTask.taskEndDate = this.editTaskForm.get('taskEndDate').value;
    this.existingTask.taskStatus = this.editTaskForm.get('taskStatus').value;
    this.existingTask.taskEstimatedTime = this.editTaskForm.get('taskEstimatedTime').value;
    this.existingTask.taskUpdatedDate = new Date();

    this.taskService.updateTask(this.existingTask).subscribe(
        re => this.displaySuccessMessageView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.taskService.getAllTasks().subscribe(t =>
          this.taskService.changeTasks(t)
      )}, 2000);
  }
  deleteTask() {
    this.taskService.deleteTask(this.existingTask.id).subscribe(
        re => this.displayDeleteSuccessView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.taskService.getAllTasks().subscribe(t =>
          this.taskService.changeTasks(t)
      )}, 2000);
  }

  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearForm() {
    this.editTaskForm.reset();
  }


}
