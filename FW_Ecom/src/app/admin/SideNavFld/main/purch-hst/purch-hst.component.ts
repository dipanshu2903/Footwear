

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { purchaseInter } from 'src/app/Service/ecom-inter';
import { EcomServiceService } from 'src/app/Service/ecom-service.service';

@Component({
  selector: 'app-purch-hst',
  templateUrl: './purch-hst.component.html',
  styleUrls: ['./purch-hst.component.css']
})



export class PurchHstComponent implements OnInit{
   purchase: purchaseInter[] = [];
   displayMsg: string = '';

  constructor(private  conService: EcomServiceService , private message : MessageService){}

  ngOnInit():void {
    this.conService.getAllPurchase().subscribe({
      next : res =>{
        this.purchase = (res as purchaseInter[]).map(item =>({
          ...item,
          status: (item.status || '').toLowerCase()
        }))
      },
      error : err =>{

        
        console.log(err)
      }
    })
    }

    // dltPurchase(purchase_Id: number) {
    //   this.conService.deleteVendor(purchase_Id).subscribe({
    //     next: (response) => {
    //       console.log('Purchase Record deleted successfully:', response);
    //       this.displayMsg = 'Delete Purchase Record Successfully';
    //       this.message.add({ severity: 'success', summary: 'Success', detail: this.displayMsg  });
    //       this.ngOnInit();
    //     },
    //     error: (error) => console.error('Error deleting :', error)
    //   });
    // }


}
