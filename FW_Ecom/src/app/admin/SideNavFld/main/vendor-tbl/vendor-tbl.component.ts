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
  constructor(private  conService: EcomServiceService){}

  ngOnInit():void {
    this.conService.getAllVendors().subscribe({
      next : res =>{
        this.vendor = res as EcomInter[]
      },
      error : err =>{
        console.log(err)
      }
    })
    }

    dltVendor(vendorId: number) {
      this.conService.deleteVendor(vendorId).subscribe({
        next: (response) => {
          console.log('Vendor deleted successfully:', response);
          
        },
        error: (error) => console.error('Error deleting vendor:', error)
      });
    }

 
    
  }



