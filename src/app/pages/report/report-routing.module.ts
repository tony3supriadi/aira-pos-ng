import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** PagesComponent */
import { SummaryComponent } from './summary/summary.component';
import { SalesComponent } from './sales/sales.component';
import { TransactionComponent } from './transaction/transaction.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'report/summary', component: SummaryComponent },
  { path: 'report/sales', component: SalesComponent },
  { path: 'report/transaction', component: TransactionComponent },
  { path: 'report/inventory', component: InventoryComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReportRoutingModule { }
