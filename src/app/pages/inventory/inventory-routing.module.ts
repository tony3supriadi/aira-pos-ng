import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** Pages */
import { SummaryComponent } from './summary/summary.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

const routes: Routes = [
  { path: 'inventory/summary', component: SummaryComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'purchase-order', component: PurchaseOrderComponent },
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
export class InventoryRoutingModule { }
