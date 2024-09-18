import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purch-ord',
  templateUrl: './purch-ord.component.html',
  styleUrls: ['./purch-ord.component.css']
})
export class PurchOrdComponent implements OnInit {
customers: any="";
purch: any ="";
  customerService: any;

ngOnInit() {
  this.customerService.getCustomersMedium().then((data: any) => {
      this.customers = data;
  });
}

calculateCustomerTotal(name: any) {
  let total = 0;

  if (this.customers) {
      for (let customer of this.customers) {
          if (customer.representative.name === name) {
              total++;
          }
      }
  }

  return total;
}

}
