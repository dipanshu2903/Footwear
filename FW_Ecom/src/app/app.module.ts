import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './admin/SideNavFld/sidenav/sidenav.component';
import { NavbarComponent } from './admin/SideNavFld/navbar/navbar.component';
import { MainComponent } from './admin/SideNavFld/main/main.component';
import { VendorTblComponent } from './admin/SideNavFld/main/vendor-tbl/vendor-tbl.component';
import { TableModule } from 'primeng/table';
import { AddVenderComponent } from './admin/SideNavFld/main/add-vender/add-vender.component';
import {  HttpClientModule } from '@angular/common/http';
import { EcomServiceService } from './Service/ecom-service.service';
import { ButtonModule } from 'primeng/button';
import { AddProductComponent } from './admin/SideNavFld/main/add-product/add-product.component';
import { ProductListComponent } from './admin/SideNavFld/main/product-list/product-list.component';
import { AdminLoginComponent } from './admin/SideNavFld/main/FormAuth/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/SideNavFld/main/FormAuth/admin-register/admin-register.component'; 
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { MessageService } from 'primeng/api';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';     
import { ToastModule } from 'primeng/toast';
import { PurchOrdComponent } from './admin/SideNavFld/main/purch-ord/purch-ord.component';
import { PurchHstComponent } from './admin/SideNavFld/main/purch-hst/purch-hst.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    MainComponent,
    VendorTblComponent,
    AddVenderComponent,
    AddProductComponent,
    ProductListComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    PurchOrdComponent,
    PurchHstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    AvatarModule,
    NoopAnimationsModule

  ],
  providers: [EcomServiceService , MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
