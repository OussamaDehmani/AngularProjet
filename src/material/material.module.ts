import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      Material.MatToolbarModule,
      Material.MatGridListModule,
      Material.MatFormFieldModule,
      Material.MatInputModule,
      Material.MatRadioModule,
      Material.MatSelectModule,
      Material.MatCheckboxModule,
      Material.MatDatepickerModule,
      Material.MatNativeDateModule,
      Material.MatButtonModule,
      Material.MatTableModule,
      Material.MatPaginatorModule,
      Material.MatIconModule,
      Material.MatSnackBarModule,
    ],
   exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatIconModule,
    Material.MatSnackBarModule,
   ],
})
export class MaterialModule { }
