import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Router,RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    SigninRoutingModule
  ],
  declarations: [SigninComponent],
})
export class SigninModule { }
