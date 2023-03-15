import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
