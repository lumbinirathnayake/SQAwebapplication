import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tasks} from '../models/Tasks';
import {Story} from '../models/Story';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private configUrl = 'http://localhost:8080/tasks/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  private tasksSource = new BehaviorSubject<Tasks[]>([]);
  currentTasks = this.tasksSource.asObservable();
  changeTasks(tasks: Tasks[]) {
    this.tasksSource.next(tasks)
  }

  selectedTaskStory: Story;
  changeSelectedTasksStory(story: Story) {
    this.selectedTaskStory = story;
  }

  addTasks(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.configUrl, task, this.httpOptions);
  }

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.configUrl, this.httpOptions);
  }

  getSingleTask(taskId: number): Observable<Tasks> {
    return this.http.get<Tasks>(this.configUrl + taskId, this.httpOptions);
  }

  updateTask(task: Tasks): Observable<Tasks> {
    return this.http.put<Tasks>(this.configUrl + task.id, task, this.httpOptions);
  }

  deleteTask(taskId: number): Observable<Tasks> {
    return this.http.delete<Tasks>(this.configUrl + taskId, this.httpOptions);
  }
}
