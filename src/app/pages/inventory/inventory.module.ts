import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { InventoryRoutingModule } from './inventory-routing.module';

/** PagesComponent */
import { SummaryComponent } from './summary/summary.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [
    SummaryComponent,
    SupplierComponent,
    PurchaseOrderComponent
  ]
})
export class InventoryModule { }
