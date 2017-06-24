import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

import { DashboardComponent } from './dashboard/dashboard.component';

const dashboardRoutes:Routes=[
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard,AdminGuard],
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
