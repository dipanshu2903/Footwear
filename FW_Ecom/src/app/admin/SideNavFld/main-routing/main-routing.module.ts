import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingRoutingModule } from './main-routing-routing.module';
import { HomeComponent } from '../main/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingRoutingModule
  ]
})
export class MainRoutingModule { }
