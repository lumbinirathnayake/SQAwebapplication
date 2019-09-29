import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {TestCaseFeatureGroup} from '../models/other/TestCaseFeatureGroup';

@Injectable({
  providedIn: 'root'
})
export class TestCaseFeatureGroupService {
  private configUrl = 'http://localhost:8080/testCaseFeatureGroups/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  private testCaseFeatureGroup = new BehaviorSubject<TestCaseFeatureGroup[]>([]);
  currentTestCaseFeatureGroup = this.testCaseFeatureGroup.asObservable();
  changeTestCaseFeatureGroup(message: TestCaseFeatureGroup[]) {
    this.testCaseFeatureGroup.next(message)
  }

  addTestCaseFeatureGroup(testCase: TestCaseFeatureGroup): Observable<TestCaseFeatureGroup> {
    return this.http.post<TestCaseFeatureGroup>(this.configUrl, testCase, this.httpOptions);
  }

  getAllTestCaseFeatureGroup(): Observable<TestCaseFeatureGroup[]> {
    return this.http.get<TestCaseFeatureGroup[]>(this.configUrl, this.httpOptions);
  }

  getSingleTestCaseFeatureGroup(testCaseFeatureGroupId: number): Observable<TestCaseFeatureGroup> {
    return this.http.get<TestCaseFeatureGroup>(this.configUrl + testCaseFeatureGroupId, this.httpOptions);
  }

  updateTestCaseFeatureGroup(testCaseFeatureGroup: TestCaseFeatureGroup): Observable<TestCaseFeatureGroup> {
    return this.http.put<TestCaseFeatureGroup>(this.configUrl + testCaseFeatureGroup.id, testCaseFeatureGroup, this.httpOptions);
  }

  deleteTestCaseFeatureGroup(testCaseFeatureGroupId: number): Observable<TestCaseFeatureGroup> {
    return this.http.delete<TestCaseFeatureGroup>(this.configUrl + testCaseFeatureGroupId, this.httpOptions);
  }
}
