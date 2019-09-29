import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Tasks} from '../../../models/Tasks';
import {FormControl, FormGroup} from '@angular/forms';
import {TasksService} from '../../../services/tasks.service';
import {LogTimeHistory} from '../../../models/other/LogTimeHistory';
import {LogTimeHistoryService} from '../../../services/log-time-history.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private tasks: Tasks,
              private taskService: TasksService,
              private logTimeHistoryService: LogTimeHistoryService) { }

  existingTask: Tasks;
  ngOnInit() {
    this.existingTask = this.tasks;
  }


  logTimeForm = new FormGroup({
    taskLoggedTime: new FormControl('')
  });

  logTimeError = false;
  updateTaskLoggedTime() {
    const time = this.logTimeForm.get('taskLoggedTime').value;
    const newTime = this.existingTask.taskLoggedTime + time;

    if (newTime <= this.existingTask.taskEstimatedTime) {
      this.logTimeError = false;
      this.existingTask.taskLoggedTime = newTime;
      this.existingTask.taskRemainingTime = this.existingTask.taskEstimatedTime - newTime;
      this.taskService.updateTask(this.existingTask).subscribe();
      this.logTimeHistoryService.addLogTimeHistory(
          new LogTimeHistory(
              this.existingTask.id, new Date(), time,
              this.existingTask.taskRemainingTime, this.existingTask.taskEstimatedTime)).subscribe();
    } else {
      this.logTimeError = true;
    }

    this.logTimeForm.reset();
  }
}
