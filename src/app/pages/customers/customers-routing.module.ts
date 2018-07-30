import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** PagesComponent*/
import { SummaryComponent } from './summary/summary.component';
import { MembersComponent } from './members/members.component';
import { GuestsComponent } from './guests/guests.component';

const routes: Routes = [
  { path: 'customers/summary', component: SummaryComponent },
  { path: 'members', component: MembersComponent },
  { path: 'guests', component: GuestsComponent }
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
export class CustomersRoutingModule { }
