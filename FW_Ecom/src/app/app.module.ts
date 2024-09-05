import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './admin/SideNavFld/sidenav/sidenav.component';
import { NavbarComponent } from './admin/SideNavFld/navbar/navbar.component';
import { MainComponent } from './admin/SideNavFld/main/main.component';
import { VendorTblComponent } from './admin/SideNavFld/main/vendor-tbl/vendor-tbl.component';
import { TableModule } from 'primeng/table';
import { AddVenderComponent } from './admin/SideNavFld/main/add-vender/add-vender.component';
import {  HttpClientModule } from '@angular/common/http';
import { EcomServiceService } from './Service/ecom-service.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    MainComponent,
    VendorTblComponent,
    AddVenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule

  ],
  providers: [EcomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
