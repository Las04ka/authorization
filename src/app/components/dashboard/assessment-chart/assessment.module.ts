import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AssessmentComponent } from './assessment.component';
import * as CanvasJSAngularChart from '../../../../assets/canvasjs.angular.component';

const CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [AssessmentComponent, CanvasJSChart],
  imports: [CommonModule, RouterLink, MatButtonModule],
  exports: [AssessmentComponent],
})
export class AssessmentModule {}
