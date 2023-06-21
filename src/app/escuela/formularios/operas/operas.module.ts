import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [
    OperasBasComponent
  ]
})
export class OperasModule { }
