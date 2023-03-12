import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AssessmentService } from '../../shared/services/assessment.service';
import { AssessmentI } from '../../shared/models/assessment';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<AssessmentI[]> {
  constructor(private $assessmentService: AssessmentService) {}
  resolve(): Observable<AssessmentI[]> {
    return this.$assessmentService.getAssessments();
  }
}
