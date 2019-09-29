import { Injectable } from '@angular/core';
import {TestCase} from '../models/TestCase';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Config} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  private configUrl = 'http://localhost:8080/testCase/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  private testCases = new BehaviorSubject<TestCase[]>([]);
  currentTestCases = this.testCases.asObservable();
  changeTestCase(message: TestCase[]) {
    this.testCases.next(message)
  }

  async setTestCase() {
    let testCases: TestCase[] = await this.getAllTestCases().toPromise();
    return testCases;
  }

  addTestCase(testCase: TestCase): Observable<TestCase> {
    return this.http.post<TestCase>(this.configUrl, testCase, this.httpOptions);
  }

  getAllTestCases(): Observable<TestCase[]> {
    return this.http.get<TestCase[]>(this.configUrl, this.httpOptions);
  }

  getSingleTestCase(testCaseId: number): Observable<TestCase> {
    return this.http.get<TestCase>(this.configUrl + testCaseId, this.httpOptions);
  }

  updateTestCase(testCase: TestCase): Observable<TestCase> {
    return this.http.put<TestCase>(this.configUrl + testCase.id, testCase, this.httpOptions);
  }

  deleteTestCase(testCaseId: number): Observable<TestCase> {
    return this.http.delete<TestCase>(this.configUrl + testCaseId, this.httpOptions);
  }
}
