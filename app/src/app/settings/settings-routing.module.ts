import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';


import { CompanyProfileComponent } from './company-profile/company-profile.component';
// import { CompanyFullProfileComponent } from './company-full-profile/company-full-profile.component';
import { CompanyFullProfileComponent } from './company-full-profile/company-full-profile.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorFullProfileComponent } from './vendor-full-profile/vendor-full-profile.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const settingRoutes: Routes = [
  {
    path:'settings',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'company-profile',
        children:[
          {
            path:'',
            component: CompanyProfileComponent
          },
          {
            path:':id',
            component: CompanyFullProfileComponent
          }
        ]
      },
      {
        path:'vendors-profile',
        children:[
          {
            path:'',
            component: VendorProfileComponent
          },
          {
            path:':id',
            component: VendorFullProfileComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(settingRoutes)],
  declarations: [],
  providers:[AdminGuard,AuthGuard],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
