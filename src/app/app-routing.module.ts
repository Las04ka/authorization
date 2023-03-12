import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardResolver } from './components/dashboard/dashboard.resolver';
import { AssessmentComponent } from './components/dashboard/assessment-chart/assessment.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { AdminPanelResolver } from './components/admin-panel/admin-panel.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    resolve: { assessments: DashboardResolver },
  },
  {
    path: 'dashboard/:id',
    component: AssessmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
    resolve: { users: AdminPanelResolver },
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
