import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { VendorTblComponent } from 'src/app/admin/SideNavFld/main/vendor-tbl/vendor-tbl.component';
import { AddVenderComponent } from '../main/add-vender/add-vender.component';

const routes: Routes = [
 
    { path : 'home' , component : HomeComponent},
    { path : 'vendor', component : VendorTblComponent},
    {path :'addvender',component:AddVenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingRoutingModule { }
