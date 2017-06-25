import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,Router } from '@angular/router';

import { MemoComponent } from './memo/memo.component';
import { MemoinReportComponent } from './memoin-report/memoin-report.component';
import { MemoissueReportComponent } from './memoissue-report/memoissue-report.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const memoRoutes:Routes=[
  {
    path:'memo',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'memo-entry',
        component: MemoComponent
      },
      {
        path:'memoin-report',
        component: MemoinReportComponent
      },
      {
        path:'memoissue-report',
        component: MemoissueReportComponent
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
