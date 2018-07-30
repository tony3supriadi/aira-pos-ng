import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/** AppModule #Routing&Component */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/** PartialComponent */
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HelpComponent } from './pages/help/help.component';

/** PagesModule */
import { LibraryModule } from './pages/library/library.module';
import { InventoryModule } from './pages/inventory/inventory.module';
import { CustomersModule } from './pages/customers/customers.module';
import { EmployeeModule } from './pages/employee/employee.module';
import { ReportModule } from './pages/report/report.module';
import { SettingsModule } from './pages/settings/settings.module';
import { PointOfSalesModule } from './pages/point-of-sales/point-of-sales.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    HelpComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LibraryModule,
    InventoryModule,
    CustomersModule,
    EmployeeModule,
    ReportModule,
    SettingsModule,
    PointOfSalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
