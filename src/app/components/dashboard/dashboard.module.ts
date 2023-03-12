import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AssessmentModule } from './assessment-chart/assessment.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    RouterLink,
    AssessmentModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
