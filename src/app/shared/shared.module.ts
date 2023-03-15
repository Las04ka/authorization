import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [RouterLink],
  exports: [ReactiveFormsModule, MaterialModule, CommonModule, RouterLink],
})
export class SharedModule {}
