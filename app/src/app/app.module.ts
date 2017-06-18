import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PurchaseComponent } from './purchase/purchase.component';
import { SalseComponent } from './salse/salse.component';
import { SalseReturnComponent } from './salse-return/salse-return.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { SalseReportComponent } from './salse-report/salse-report.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { MemoinComponent } from './memoin/memoin.component';
import { MemooutComponent } from './memoout/memoout.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'purchase-entry',  component: PurchaseComponent },
  { path: 'sales-entry',  component: SalseComponent },
  { path: 'purchase-return',  component: PurchaseReturnComponent },
  { path: 'sales-return',  component: SalseReturnComponent },
  { path: 'purchase-report',  component: PurchaseReportComponent },
  { path: 'sales-report',  component: SalseReportComponent },
  { path: 'memoin',  component: MemoinComponent },
  { path: 'memoout',  component: MemooutComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    
    AppComponent,
    DashboardComponent,
    PurchaseComponent,
    SalseComponent,
    SalseReturnComponent,
    PurchaseReturnComponent,
    SalseReportComponent,
    PurchaseReportComponent,
    MemoinComponent,
    MemooutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DatePickerModule,
    SelectModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
