import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { EcomInter } from './ecom-inter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomServiceService {

  constructor(private http : HttpClient) { }

  url : string = environment.baseUrl;

  addVender(user:Array<string>){
    return  this.http.post(this.url +'User/CreateUser',{
     FirstName :user[0],
     LastName :user[1],
     Contact : user[2],
     Email:user[3],
     State :user[4],
     City : user[5]
     
    },{
     responseType : 'text'
    });
}

  getAllVendors():Observable<EcomInter[]>
  {
    return this.http.get<EcomInter[]>(`${this.url}Vendor`);
  }

  getStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}State`);
  }

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}City`);
  }
}
