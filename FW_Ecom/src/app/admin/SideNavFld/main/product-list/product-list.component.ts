import { Component, OnInit } from '@angular/core';
import { ProductInter } from 'src/app/Service/ecom-inter';
import { EcomServiceService } from 'src/app/Service/ecom-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  display: boolean = false;
  productForm: FormGroup;
  product: ProductInter[] = [];
  editProd: ProductInter | null = null; // To store the product being edited

  colors: any[] = [];
  subCategories: any[] = [];
  sizes: any[] = [];

  constructor(private conService: EcomServiceService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      subCategoryName: ['', Validators.required],
      colorName : ['',Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      gender: ['', Validators.required],
      sizeNo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.conService.getAllProducts().subscribe({
      next: res => {
        this.product = res as ProductInter[];
      },
      error: err => {
        console.log(err);
      }
    });

    this.conService.getColors().subscribe({
      next: res => {
        this.colors = res;
      },
      error: err => {
        console.log(err);
      }
    });

    this.conService.getAllSubCate().subscribe({
      next: res => {
        this.subCategories = res;
        console.log(res)
      },
      error: err => {
        console.log(err);
      }
    });

    this.conService.getAllSize().subscribe({
      next: res => {
        this.sizes = res;
      },
      error: err => {
        console.log(err);
      }
    });

  }

  showDialog(product?: ProductInter) {
    debugger
    console.log(this.productForm);
    
    if (product) {
      this.editProd = product;
      this.productForm.patchValue({
        productName: product.productName,
        subCategoryName: product.subCategoryName,
        colorName : product.colorName,
        imageUrl: product.imageUrl,
        description: product.description,
        gender: product.gender,
        sizeNo: product.sizeNo
      });
    } else {
      this.productForm.reset();
      this.editProd = null;
    }
    this.display = true;
  }

  saveProduct() {
    console.log('Product Form Value:', this.productForm.value);
    console.log('Edit Product:', this.editProd);
    if (this.editProd) {
      console.log('Editing Product');

      this.conService.editProduct(this.editProd.product_Id, this.productForm.value).subscribe({
        next: (response: any) => {
          console.log('Product updated successfully:', response);
          this.ngOnInit();
          this.display = false;
        },
        error: (error: any) => 
          {
              console.error('Error updating product:', error);
             console.error('Error details:', error.error);
          }
      });
    } else {
      this.conService.addProduct(this.productForm.value).subscribe({
        next: (response: any) => {
          console.log('Product added successfully:', response);
          this.ngOnInit();
          this.display = false;
        },
        error: (error: any) => 
          { console.error('Error adding product:', error)
          }
      });
    }
  }

  dltProduct(product_Id: number) {
    this.conService.deleteProduct(product_Id).subscribe({
      next: (response) => {
        console.log('Product deleted successfully:', response);
        this.ngOnInit();
      },
      error: (error) => console.error('Error deleting product:', error)
    });
  }
}




