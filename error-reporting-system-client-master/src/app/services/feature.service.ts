import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {TestCase} from '../models/TestCase';
import {BehaviorSubject, from, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Feature} from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private configUrl = 'http://localhost:8080/feature/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
        'Something bad happened; please try again later.');
  };

  constructor(public http: HttpClient) {
  }

  private features = new BehaviorSubject<Feature[]>([]);
  currentFeatures = this.features.asObservable();
  changeFeatures(message: Feature[]) {
    this.features.next(message)
  }

  async setFeatures() {
    let features: Feature[] = await this.getAllFeatures().toPromise();
    return features;
  }

  addFeature(feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(this.configUrl, feature, this.httpOptions)
        .pipe(catchError(err => {return throwError(err.status)}));
  }

  getAllFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.configUrl, this.httpOptions);
  }

  getSingleFeature(featureId: number): Observable<Feature> {
    return this.http.get<Feature>(this.configUrl + featureId, this.httpOptions);
  }

  updateFeature(feature: Feature): Observable<Feature> {
    return this.http.put<Feature>(this.configUrl + feature.id, feature, this.httpOptions);
  }

  deleteFeature(featureId: number): Observable<Feature> {
    return this.http.delete<Feature>(this.configUrl + featureId, this.httpOptions);
  }
}
