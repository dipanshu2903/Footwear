import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { EcomInter, ProductInter, purchaseInter } from './ecom-inter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomServiceService {

  constructor(private http : HttpClient) { }

  url : string = environment.baseUrl;

  addPostVender(vendor: {
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    address: string;
    state: string;
    city: string;
  }) {
    return this.http.post(`${this.url}Vendor`,{
      FirstName: vendor.firstName,
      LastName: vendor.lastName,
      Contact: vendor.contact,
      Email: vendor.email,
      Address: vendor.address,
      StateId: vendor.state,
      CityId: vendor.city,
    },{
      responseType: 'text'
    });
  }
  

  getAllVendors():Observable<EcomInter[]>{
    return this.http.get<EcomInter[]>(`${this.url}Vendor`);
  }

  getAllProducts():Observable<ProductInter[]>{
    return this.http.get<ProductInter[]>(`${this.url}Product`);
  }
  getStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}State`);
  }

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}City`);
  }
 
  getAllPurchase(): Observable<purchaseInter[]>{
    return this.http.get<purchaseInter[]>(`${this.url}Purchase`)
  }

deleteVendor(vendorId : number): Observable<any>{
    return this.http.delete(`${this.url}Vendor/${vendorId}`)
}

deleteProduct(product_Id : number): Observable<any>{
  return this.http.delete(`${this.url}Product/${product_Id}`)
}

dltPurchase(purchase_Id: number): Observable<any>{
  return this.http.delete(`${this.url}Purchase/${purchase_Id}`)
} 

  // getColors(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.url}Color`);
  // }

  // getAllSubCate():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.url}SubCate`);
  // }

  // getAllSize():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.url}Size`);
  // }
}
