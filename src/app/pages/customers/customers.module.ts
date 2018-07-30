import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { CustomersRoutingModule } from './customers-routing.module';

/** PagesComponet */
import { SummaryComponent } from './summary/summary.component';
import { MembersComponent } from './members/members.component';
import { GuestsComponent } from './guests/guests.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [
    SummaryComponent,
    MembersComponent,
    GuestsComponent
  ]
})
export class CustomersModule { }
