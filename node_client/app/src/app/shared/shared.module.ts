import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import {
  MatCommonModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatExpansionModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatCommonModule, MatInputModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
    MatCardModule,
    MatIconModule, MatListModule, MatTableModule, MatExpansionModule, MatMenuModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class SharedModule {}
