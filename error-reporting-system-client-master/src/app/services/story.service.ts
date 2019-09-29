import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Epic} from '../models/epic';
import {Story} from '../models/Story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private configUrl = 'http://localhost:8080/story/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(public http: HttpClient) { }

  private storySourse = new BehaviorSubject<Story[]>([]);
  currentStories = this.storySourse.asObservable();
  changeStory(stories: Story[]) {
    this.storySourse.next(stories);
  }

  createNewStory(story: Story): Observable<Story> {
    return this.http.post<Story>(this.configUrl, story, this.httpOptions);
  }

  getAllStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.configUrl, this.httpOptions);
  }

  getSingleStory(id: number): Observable<Story> {
    return this.http.get<Story>(this.configUrl + id, this.httpOptions);
  }

  updateStory(story: Story): Observable<Story> {
    return this.http.put<Story>(this.configUrl + story.id, story, this.httpOptions);
  }

  deleteEpic(id: number): Observable<Epic> {
    return this.http.delete<Epic>(this.configUrl + id, this.httpOptions);
  }
}
