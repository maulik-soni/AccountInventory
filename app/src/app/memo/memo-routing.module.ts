import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,Router } from '@angular/router';

import { MemoInComponent } from './memoin/memoin.component';
import { MemoinReportComponent } from './memoin-report/memoin-report.component';
import { MemoissueReportComponent } from './memoissue-report/memoissue-report.component';
import { MemooutComponent } from './memoout/memoout.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

import { MemoinReturnReportComponent } from './memoin-return-report/memoin-return-report.component';
import { MemoissueReturnReportComponent } from './memoissue-return-report/memoissue-return-report.component';


const memoRoutes:Routes=[
  {
    path:'jangad',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'jangad-in-entry',
        component: MemoInComponent
      },
      {
        path:'jangad-issue-entry',
        component: MemooutComponent
      },
      {
        path:'jangad-in-report',
        component: MemoinReportComponent
      },
      {
        path:'jangad-in-return-report',
        component: MemoinReturnReportComponent
      },
      {
        path:'jangad-issue-report',
        component: MemoissueReportComponent
      },
      {
        path:'jangad-issue-return-report',
        component: MemoissueReturnReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(memoRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})
export class MemoRoutingModule { }
