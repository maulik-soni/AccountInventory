import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { NewCashbookComponent } from './new-cashbook/new-cashbook.component';
import { CashbookReportComponent } from './cashbook-report/cashbook-report.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const cashbookRoutes:Routes=[
  {
    path:'cashbook',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'new-cashbook',
        component: NewCashbookComponent
      },
      {
        path:'cashbook-report',
        component: CashbookReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cashbookRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class CashbookRoutingModule { }
