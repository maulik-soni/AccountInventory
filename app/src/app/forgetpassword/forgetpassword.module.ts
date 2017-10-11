import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ForgetPasswordComponent } from './forgetpassword.component';
import { ForgetPasswordRoutingModule} from './forgetpassword-routing.module';
import { Router,RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ForgetPasswordRoutingModule
  ],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
