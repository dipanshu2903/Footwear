import { Component, OnInit } from '@angular/core';
import { ProductInter } from 'src/app/Service/ecom-inter';
import { EcomServiceService } from 'src/app/Service/ecom-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

  export class ProductListComponent implements OnInit {
    product: ProductInter[] = [];
 
    constructor(private  conService: EcomServiceService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  //   ngOnInit():void {
  
  //   this.conService.getStates().subscribe(State =>{
  //     console.log('states' ,State)
  //     this.State = State ;
  //   })
  
  //   this.conService.getCities().subscribe(City => {
  //     console.log('cities' ,City)
  //     this.City = City ;
  //   })
  //     this.conService.getAllVendors().subscribe((vendors: EcomInter[])=> { 
  //       console.log('Vendors:', vendors);
  //       this.vendor = vendors.map(v =>({
  //       ...v,
  //           stateName: this.State.find(s => s.id === v.stateId)?.stateName || 'Unknown',
  //           cityName: this.City.find(c => c.id === v.cityId)?.cityName  || 'Unknown'
  //     }))
  //   },
  // (error) => {
  //   console.error('Error Fetching Vendors' , error);
  // })
  // }
  }

