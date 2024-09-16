import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { VendorTblComponent } from 'src/app/admin/SideNavFld/main/vendor-tbl/vendor-tbl.component';
import { AddVenderComponent } from '../main/add-vender/add-vender.component';
import { AddProductComponent } from '../main/add-product/add-product.component';
import { ProductListComponent } from '../main/product-list/product-list.component';
import { PurchOrdComponent } from '../main/purch-ord/purch-ord.component';
import { PurchHstComponent } from '../main/purch-hst/purch-hst.component';

const routes: Routes = [
 
    {path : 'home' , component : HomeComponent},
    {path : 'vendors', component : VendorTblComponent},
    {path :'addvender',component:AddVenderComponent},
    {path:'products',component:ProductListComponent},
    {path: 'aadproduct',component :AddProductComponent},
    {path :'purchOrd' , component : PurchOrdComponent},
    {path : 'purchHst' ,component : PurchHstComponent},
    {path:'purchOrd',component:PurchOrdComponent},
    {path:'purchHst',component:PurchHstComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingRoutingModule { }
