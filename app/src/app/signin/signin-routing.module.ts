import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,Router } from '@angular/router';

import { SigninComponent } from './signin.component';

import { AuthorizedGuard } from './../authorization/authorized.service';



const signinRoutes:Routes=[
  {
    path:'login',
    component: SigninComponent,
    canActivate:[AuthorizedGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(signinRoutes)
  ],
  declarations: [],
  providers:[AuthorizedGuard]
})
export class SigninRoutingModule { }
