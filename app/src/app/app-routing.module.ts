import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';

import { AuthGuard } from './authorization/auth-guard.service';
import { AdminGuard } from './authorization/admin-role-guard.service';
import { AuthModule } from './authorization/auth.module';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayableBillComponent} from './bills/payable-bill/payable-bill.component';
import { RecievableBillComponent } from './bills/recievable-bill/recievable-bill.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseReportComponent } from './purchase/purchase-report/purchase-report.component';
import { NewCashbookComponent } from './cashbook/new-cashbook/new-cashbook.component';
import { CashbookReportComponent } from './cashbook/cashbook-report/cashbook-report.component';

const appRoutes: Routes =[
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: SigninComponent },
   { path: 'dashboard',  component: DashboardComponent },
   { path: 'payable-bill',component: PayableBillComponent},
   { path: 'recievable-bill',component: RecievableBillComponent},
   { path: 'purchase-entry',  component: PurchaseComponent },
   { path: 'new-cashbook', component: NewCashbookComponent},
   { path: 'cashbook-report', component: CashbookReportComponent},
//   { path: 'sales-entry',  component: SalseComponent },
//   { path: 'purchase-return',  component: PurchaseReturnComponent },
//   { path: 'sales-return',  component: SalesReturnComponent },
   { path: 'purchase-report',  component: PurchaseReportComponent },
//   { path: 'sales-report',  component: SaleReportComponent },
//   { path: 'memoin',  component: MemoinComponent },
//   { path: 'memoout',  component: MemooutComponent }
//   // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
