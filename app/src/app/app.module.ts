import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './authorization/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MemoModule } from './memo/memo.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SalesModule } from './sales/sales.module';
import { SigninModule } from './signin/signin.module';
import { DashboardStructureModule } from './dashboard-structure/dashboard-structure.module';
import { AccountModule } from './account/account.module';

import { CashbookModule } from './cashbook/cashbook.module';
import { UserModule } from './user/user.module';
import { DatepickerModule } from 'angular2-material-datepicker';
import {LabissueModule} from './labissue/labissue.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardStructureModule,
    DashboardModule,
    AccountModule,
    MemoModule,
    PurchaseModule,
    // BillModule,
    CashbookModule,
    SalesModule,
    SigninModule,
    UserModule,
    BrowserAnimationsModule,
    DatepickerModule,
    // ServicesModule,   
    AppRoutingModule,
    LabissueModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
