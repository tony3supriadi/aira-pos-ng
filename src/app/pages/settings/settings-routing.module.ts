import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** PagesComponent */
import { AccountsComponent } from './accounts/accounts.component';
import { StoreProfileComponent } from './store-profile/store-profile.component';

const routes: Routes = [
  { path: 'setting/accounts', component: AccountsComponent },
  { path: 'setting/store-profile', component: StoreProfileComponent }
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
export class SettingsRoutingModule { }
