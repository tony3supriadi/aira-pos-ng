import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { SettingsRoutingModule } from './settings-routing.module';

/** PagesComponent */
import { AccountsComponent } from './accounts/accounts.component';
import { StoreProfileComponent } from './store-profile/store-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [
    AccountsComponent, 
    StoreProfileComponent
  ]
})
export class SettingsModule { }
