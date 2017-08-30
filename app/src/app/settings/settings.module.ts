import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';



import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

import { WebServicesService } from './../services/web-services.service';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CompanyProfileComponent, BankDetailsComponent, VendorProfileComponent, VendorDetailsComponent],
  providers:[WebServicesService]
})
export class SettingsModule { }
