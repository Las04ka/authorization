import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AssessmentI } from '../../shared/models/assessment';
import { AutoUnsubscribe } from '../../shared/decorators/unsubscriber';
import { AppState } from '../../_core/state/state';
import { loadAssessments } from '../../_core/state/assessments/assessments.actions';
import { assessmentsSelector } from '../../_core/state/assessments/assessments.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
@AutoUnsubscribe
export class DashboardComponent implements OnInit {
  assessmentsData!: AssessmentI[];
  columnsToDisplay: string[] = ['index', 'name', 'users', 'image'];

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAssessments());
    this.store
      .select(assessmentsSelector)
      .subscribe((el) => (this.assessmentsData = el));
  }

  openAssessment(rowData: AssessmentI): void {
    this.router.navigateByUrl(`dashboard/${rowData.id.toString()}`, {
      state: { name: rowData.name },
    });
  }
}
