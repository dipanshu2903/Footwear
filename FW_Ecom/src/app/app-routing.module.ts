import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './admin/not-found-page/not-found-page.component';
import { HomeComponent } from './admin/SideNavFld/main/home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminRegisterComponent } from './admin/SideNavFld/main/FormAuth/admin-register/admin-register.component';
import { AdminLoginComponent } from './admin/SideNavFld/main/FormAuth/admin-login/admin-login.component';

const routes: Routes = [  {path:'dashboard',loadChildren:()=>import('./admin/SideNavFld/main-routing/main-routing.module').then(m=>m.MainRoutingModule)},
  {path:'login',component :AdminLoginComponent},
  {path:'register',component:AdminRegisterComponent},
  {path : '' , component : HomeComponent},
  { path : '**' , component : NotFoundPageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
