import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,Router } from '@angular/router';
import {ForgetPasswordComponent} from './forgetpassword.component';

const ResetPasswordRoutes:Routes=[
  {
    path:'resetpassword',
    component: ForgetPasswordComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ResetPasswordRoutes)
  ],
  declarations: []
})
export class ForgetPasswordRoutingModule { }
