import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** Pages Component */
import { RulesComponent } from './rules/rules.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: 'employee/rules', component: RulesComponent },
  { path: 'employee/staff', component: StaffComponent}
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
export class EmployeeRoutingModule { }
