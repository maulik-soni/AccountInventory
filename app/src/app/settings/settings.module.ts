import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';

import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyBankDetailsComponent } from './company-bank-details/company-bank-details.component';
import { VendorBankDetailsComponent } from './vendor-bank-details/vendor-bank-details.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

import { WebServicesService } from './../services/web-services.service';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [CompanyProfileComponent, CompanyBankDetailsComponent, VendorBankDetailsComponent, VendorProfileComponent],
  providers:[WebServicesService]
})
export class SettingsModule { }
