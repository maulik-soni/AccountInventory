import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,Router } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { SalesReportComponent } from './sales-report/sales-report.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const salesRoutes:Routes=[
  {
    path:'sales',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'sales-entry',
        component: SalesComponent
      },
      {
        path:'sales-report',
        component: SalesReportComponent
      },
      {
        path:'sales-return',
        component: SalesReturnComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(salesRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class SalesRoutingModule { }
