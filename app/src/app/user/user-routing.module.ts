import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const userRoutes:Routes=[
  {
    path:'users',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'add-new',
        component: AddUserComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class UserRoutingModule { }
