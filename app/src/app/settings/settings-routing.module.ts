import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';


import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyBankDetailsComponent } from './company-bank-details/company-bank-details.component';
import { VendorBankDetailsComponent } from './vendor-bank-details/vendor-bank-details.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

import { AuthGuard } from './../authorization/auth-guard.service';
import { AdminGuard } from './../authorization/admin-role-guard.service';

const settingRoutes: Routes = [
  {
    path:'settings',
    canActivate:[AuthGuard,AdminGuard],
    children:[
      {
        path:'company-bank-details',
        component: CompanyBankDetailsComponent
      },
      {
        path:'company-profile',
         component: CompanyProfileComponent
      },
      {
        path:'vendors-bank-detail',
        component: VendorBankDetailsComponent
      },
      {
        path:'vendors-profile',
        component: VendorProfileComponent
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
