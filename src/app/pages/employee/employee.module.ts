import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** ROuting */
import { EmployeeRoutingModule } from './employee-routing.module';

/** PagesComponent */
import { RulesComponent } from './rules/rules.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [
    RulesComponent, 
    StaffComponent
  ]
})
export class EmployeeModule { }
