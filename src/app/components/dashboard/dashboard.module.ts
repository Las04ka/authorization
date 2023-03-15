import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { AssessmentComponent } from './assessment-chart/assessment.component';
import { SharedModule } from '../../shared/shared.module';
import { CanvasJSChart } from '../../../assets/canvasjs.angular.component';

@NgModule({
  declarations: [DashboardComponent, AssessmentComponent, CanvasJSChart],
  imports: [SharedModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
