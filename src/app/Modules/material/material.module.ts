import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports : [
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [],
  // imports: [
  //   CommonModule,
  //   MatSelectModule,
  //   MatToolbarModule,
  //   MatButtonModule,
  //   MatIconModule,
  //   MatCardModule,
  //   MatInputModule,
  //   MatFormFieldModule,
  // ]
})
export class MaterialModule { }
