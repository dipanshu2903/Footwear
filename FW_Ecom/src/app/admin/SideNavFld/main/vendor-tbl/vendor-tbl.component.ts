import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-tbl',
  templateUrl: './vendor-tbl.component.html',
  styleUrls: ['./vendor-tbl.component.css']
})
export class VendorTblComponent {
  vendors : boolean = true ;
  vendor:any[]=[{}]
}
