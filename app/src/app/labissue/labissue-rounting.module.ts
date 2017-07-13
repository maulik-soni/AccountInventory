import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';
import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';


import { LabissueEntryComponent } from './labissue-entry/labissue-entry.component';
import { LabissueReportComponent } from './labissue-report/labissue-report.component';
import { LabissueReceivedReportComponent } from './labissue-received-report/labissue-received-report.component';

const labissueRoutes:Routes=[
  {
    path:'labissue',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'labissue-entry',
        component: LabissueEntryComponent
      },
      {
        path:'labissue-report',
        component: LabissueReportComponent
      },
      {
        path:'labissue-return-report',
        component: LabissueReceivedReportComponent
      },      
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(labissueRoutes)
  ],
  declarations: [],
  providers:[AdminGuard,AuthGuard]
})

export class LabissueRoutingModule { }