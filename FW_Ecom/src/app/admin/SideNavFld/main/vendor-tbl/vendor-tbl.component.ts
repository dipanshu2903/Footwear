import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EcomInter } from 'src/app/Service/ecom-inter';
import { EcomServiceService } from 'src/app/Service/ecom-service.service';


@Component({
  selector: 'app-vendor-tbl',
  templateUrl: './vendor-tbl.component.html',
  styleUrls: ['./vendor-tbl.component.css']
})
export class VendorTblComponent implements OnInit {
  vendor: EcomInter[] = [];
  displayMsg: string = '';
  constructor(private  conService: EcomServiceService,private messageService: MessageService){}

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
          this.displayMsg = 'Delete Vendor Successfully';
          this.messageService.add({ severity: 'success', summary: 'Success', detail: this.displayMsg  });
          console.log('Vendor deleted successfully:', response);
          this.ngOnInit();
        },
        error: (error) => {
          this.displayMsg = 'UnSuccessfull';
          this.messageService.add({ severity: 'error', summary: '', detail: this.displayMsg  });
          console.error('Error deleting vendor:', error)
          this.ngOnInit();
        }
      });
    }

 
    
  }



