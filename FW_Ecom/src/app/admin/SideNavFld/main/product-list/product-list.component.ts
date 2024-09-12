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

  constructor(private conService: EcomServiceService) { }

  ngOnInit(): void {
    this.conService.getAllProducts().subscribe({
      next: res => {
        this.product = res as ProductInter[]
      },
      error: err => {
        console.log(err)
      }
    })
  }
  dltProduct(product_Id: number) {
    this.conService.deleteProduct(product_Id).subscribe({
      next: (response) => {
        console.log('Vendor deleted successfully:', response);
        
      },
      error: (error) => console.error('Error deleting vendor:', error)
    });
  }
}
