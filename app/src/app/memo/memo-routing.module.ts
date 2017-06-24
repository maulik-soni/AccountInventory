import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,Router } from '@angular/router';

import { MemoinComponent } from './memoin/memoin.component';
import { MemooutComponent } from './memoout/memoout.component';


import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const memoRoutes:Routes=[
  {
    path:'memo',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'memo-in',
        component: MemoinComponent
      },
      {
        path:'memo-out',
        component: MemooutComponent
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
