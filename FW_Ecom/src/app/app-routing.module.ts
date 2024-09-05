import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './admin/not-found-page/not-found-page.component';
import { HomeComponent } from './admin/SideNavFld/main/home/home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [  {path:'dashboard',loadChildren:()=>import('./admin/SideNavFld/main-routing/main-routing.module').then(m=>m.MainRoutingModule)},
  {path : '' , component : HomeComponent},
  { path : '**' , component : NotFoundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
