import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** DataTables Module */
import { DataTablesModule } from 'angular-datatables';

/** Routing */
import { LibraryRoutingModule } from './library-routing.module';

/** PagesComponent */
import { ItemLibraryComponent } from './item-library/item-library.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscountComponent } from './discount/discount.component';

/** Service */


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    LibraryRoutingModule
  ],
  declarations: [
    ItemLibraryComponent, 
    ManageItemComponent, 
    CategoriesComponent, 
    DiscountComponent
  ]
})
export class LibraryModule { }
