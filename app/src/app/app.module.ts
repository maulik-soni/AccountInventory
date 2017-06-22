import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './authorization/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MemoModule } from './memo/memo.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SalesModule } from './sales/sales.module';
import { SigninModule } from './signin/signin.module';
import { ServicesModule } from './services/services.module';
import { BillModule } from './bills/bill.module';
import { CashbookModule } from './cashbook/cashbook.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    MemoModule,
    PurchaseModule,
    BillModule,
    CashbookModule,
    SalesModule,
    SigninModule,
    ServicesModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
