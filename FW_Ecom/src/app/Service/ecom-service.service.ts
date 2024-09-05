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

  url : string = environment.baseUrl

  getAllVendors():Observable<EcomInter[]>
  {
    return this.http.get<EcomInter[]>(`${this.url}api/Vendor`);
  }

  getStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}api/State`);
  }

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}api/City`);
  }
}
