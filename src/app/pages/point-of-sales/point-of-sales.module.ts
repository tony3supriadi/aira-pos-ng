import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { PointOfSalesRoutingModule } from './point-of-sales-routing.module';

/** PagesComponent */
import { PointOfSalesComponent } from './point-of-sales.component';

@NgModule({
  imports: [
    CommonModule,
    PointOfSalesRoutingModule
  ],
  declarations: [
    PointOfSalesComponent
  ]
})
export class PointOfSalesModule { }
