import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/* This is the main module for the library */
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
  ]
})
export class GemUiCommonModule { }
