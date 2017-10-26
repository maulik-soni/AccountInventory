import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';


import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

import { WebServicesService } from './../services/web-services.service';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorFullProfileComponent } from './vendor-full-profile/vendor-full-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyFullProfileComponent } from './company-full-profile/company-full-profile.component';
import { VendorBankDetailsComponent } from './vendor-bank-details/vendor-bank-details.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [BankDetailsComponent, VendorProfileComponent, VendorDetailsComponent, VendorFullProfileComponent, CompanyProfileComponent, CompanyDetailsComponent, CompanyFullProfileComponent, VendorBankDetailsComponent],
  providers:[WebServicesService]
})
export class SettingsModule { }
