import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** Pages */
import { ItemLibraryComponent } from './item-library/item-library.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscountComponent } from './discount/discount.component';

const routes: Routes = [
  { path: 'item-library', component: ItemLibraryComponent },
  { path: 'manage-item', component: ManageItemComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'discount', component: DiscountComponent },
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
export class LibraryRoutingModule { }
