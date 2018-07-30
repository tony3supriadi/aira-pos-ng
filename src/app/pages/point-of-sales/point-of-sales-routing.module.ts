import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** PagesComponent */
import { PointOfSalesComponent } from './point-of-sales.component';

const routes: Routes = [
  { path: 'point-of-sales', component: PointOfSalesComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PointOfSalesRoutingModule { }
