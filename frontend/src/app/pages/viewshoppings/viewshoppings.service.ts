import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viewshoppings } from './viewshoppings.model';

@Injectable({
  providedIn: 'root'
})
export class ViewshoppingsService {
  private apiurl = "http://localhost:8080/api/shops"

  constructor(private http:HttpClient) { }
  getShops():Observable<Viewshoppings[]>{
    return this.http.get<Viewshoppings[]>(this.apiurl);
  }
  deleteShops(shopId:any){
   return this.http.delete(`${this.apiurl}/${shopId}`);
  }
  
}
