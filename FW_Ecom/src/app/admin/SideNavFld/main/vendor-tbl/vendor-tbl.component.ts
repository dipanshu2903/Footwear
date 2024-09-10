import { Component, OnInit } from '@angular/core';
import { EcomInter } from 'src/app/Service/ecom-inter';
import { EcomServiceService } from 'src/app/Service/ecom-service.service';


@Component({
  selector: 'app-vendor-tbl',
  templateUrl: './vendor-tbl.component.html',
  styleUrls: ['./vendor-tbl.component.css']
})
export class VendorTblComponent implements OnInit {
  vendor: EcomInter[] = [];
  State : { id :  number , stateName  : string}[] = [];
  City : { id : number , cityName : string }[] =[] ;
  constructor(private  conService: EcomServiceService){}

  ngOnInit():void {

  this.conService.getStates().subscribe(State =>{
    console.log('states' ,State)
    this.State = State ;
  })

  this.conService.getCities().subscribe(City => {
    console.log('cities' ,City)
    this.City = City ;
  })
    this.conService.getAllVendors().subscribe((vendors: EcomInter[])=> { 
      console.log('Vendors:', vendors);
      this.vendor = vendors.map(v =>({
      ...v,
          stateName: this.State.find(s => s.id === v.stateId)?.stateName || 'Unknown',
          cityName: this.City.find(c => c.id === v.cityId)?.cityName  || 'Unknown'
    }))
  },
(error) => {
  console.error('Error Fetching Vendors' , error);
})
}
}