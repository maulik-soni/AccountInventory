import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';


const dashboardRoutes:Routes=[
  { 
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard,AdminGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class DashboardRoutingModule { }
