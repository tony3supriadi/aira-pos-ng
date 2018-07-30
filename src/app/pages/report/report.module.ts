import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { ReportRoutingModule } from './report-routing.module';

/** PagesComponent */
import { SummaryComponent } from './summary/summary.component';
import { SalesComponent } from './sales/sales.component';
import { TransactionComponent } from './transaction/transaction.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule
  ],
  declarations: [
    SummaryComponent, 
    SalesComponent, 
    TransactionComponent, 
    InventoryComponent
  ]
})
export class ReportModule { }
