import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiUrl } from '../../../environment/environment';
import { AssessmentGraphI, AssessmentI } from '../models/assessment';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  constructor(private http: HttpClient) {}

  getAssessments(): Observable<AssessmentI[]> {
    return this.http.get<AssessmentI[]>(`${apiUrl}/userassessments`);
  }

  getAssessmentChartData(id: number): Observable<AssessmentGraphI> {
    const params = new HttpParams().set('id', id);
    return this.http.get<AssessmentGraphI>(`${apiUrl}/userassessments/graph`, {
      params: params,
    });
  }
}
