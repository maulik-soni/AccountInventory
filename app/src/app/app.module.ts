import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PurchaseComponent } from './purchase/purchase.component';
import { SalseComponent } from './salse/salse.component';
import { SalseReturnComponent } from './salse-return/salse-return.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { SalseReportComponent } from './salse-report/salse-report.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { MemoComponent } from './memo/memo.component';
import { MemoinReportComponent } from './memoin-report/memoin-report.component';
import { MemoissueReportComponent } from './memoissue-report/memoissue-report.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'purchase-entry',  component: PurchaseComponent },
  { path: 'sales-entry',  component: SalseComponent },
  { path: 'purchase-return',  component: PurchaseReturnComponent },
  { path: 'sales-return',  component: SalseReturnComponent },
  { path: 'purchase-report',  component: PurchaseReportComponent },
  { path: 'sales-report',  component: SalseReportComponent },
  { path: 'memo',  component: MemoComponent },
  { path: 'memoin-report', component: MemoinReportComponent },
  { path: 'memoissue-report', component: MemoissueReportComponent }
  //{ path: 'memoout',  component: MemooutComponent }
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
    MemoComponent,
    MemoinReportComponent,
    MemoissueReportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DatePickerModule,
    SelectModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    BrowserAnimationsModule,
    Ng2FilterPipeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
