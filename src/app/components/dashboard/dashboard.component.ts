import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  AssessmentI,
  AssessmentResolverData,
} from '../../shared/models/assessment';
import { AutoUnsubscribe } from '../../shared/decorators/unsubscriber';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
@AutoUnsubscribe
export class DashboardComponent implements OnInit {
  assessmentsData!: AssessmentI[];
  columnsToDisplay: string[] = ['index', 'name', 'users', 'image'];

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    (this._activatedRoute.data as AssessmentResolverData).subscribe(
      (el) => (this.assessmentsData = el.assessments),
    );
  }

  openAssessment(rowData: AssessmentI): void {
    this.router.navigateByUrl(`dashboard/${rowData.id.toString()}`, {
      state: { name: rowData.name },
    });
  }
}
