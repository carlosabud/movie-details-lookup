import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, CommonModule],
  exports: [MatInputModule, MatFormFieldModule, CommonModule],
})
export class MaterialModule {}
