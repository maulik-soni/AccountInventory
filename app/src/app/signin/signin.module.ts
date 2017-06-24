import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SigninRoutingModule
  ],
  declarations: [SigninComponent],
})
export class SigninModule { }
