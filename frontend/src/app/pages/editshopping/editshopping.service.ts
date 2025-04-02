import { Injectable } from '@angular/core';
import { editShop } from './editshopping.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditshoppingService {
  private apiurl = "http://localhost:8080/api/shops"

  constructor(private http:HttpClient) { }
 
  editShop(id:number,updateShop:editShop):Observable<editShop>{
    return this.http.put<editShop>(`${this.apiurl}/${id}`,updateShop);
  }
  getShopById(id:number){
    return this.http.get(`${this.apiurl}/${id}`);
  }
}
