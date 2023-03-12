import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { AdminPanelComponent } from './admin-panel.component';
@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, MatTableModule],
  exports: [AdminPanelComponent],
})
export class AdminPanelModule {}
