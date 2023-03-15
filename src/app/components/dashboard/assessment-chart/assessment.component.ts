import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AssessmentService } from '../../../_core/services/assessment.service';
import { GraphPointI } from '../../../shared/models/assessment';
import { AutoUnsubscribe } from '../../../shared/decorators/unsubscriber';
import { intitialChart } from '../../../shared/constants';
import { ChartI } from '../../../shared/models/chart';

@Component({
  selector: 'app-assessment-chart',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
@AutoUnsubscribe
export class AssessmentComponent implements OnInit {
  assessmentId!: number;
  chart!: ChartI;
  chartName$!: Observable<{ name: string; navigationId: number }>;
  dataPoints: GraphPointI[] = [];
  chartOptions = intitialChart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private $assessmentService: AssessmentService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.assessmentId = params['id'];
    });

    this.chartName$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state),
    );
    this.chartName$.subscribe((el) => (this.chartOptions.title.text = el.name));

    this.$assessmentService
      .getAssessmentChartData(this.assessmentId)
      .subscribe((el) => {
        this.chartOptions.data[0].type = el.type;
        Object.entries(el.data).forEach(([key, value]) => {
          this.dataPoints.push({ label: key, y: value });
        });
        (this.chartOptions.data[0].dataPoints as GraphPointI[]) =
          this.dataPoints;
        this.chart.render();
      });
  }

  getChartInstance(chart: object) {
    this.chart = chart as ChartI;
  }
}
