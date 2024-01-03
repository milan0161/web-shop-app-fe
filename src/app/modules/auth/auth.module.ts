import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { CustomModule } from '../shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, CustomModule, ReactiveFormsModule],
  exports: [RegisterComponent],
})
export class AuthModule {}
