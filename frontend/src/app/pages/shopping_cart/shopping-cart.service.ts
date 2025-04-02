import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../shopping-cart/shopcart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private apiUrl ="http://localhost:8080/api/shops";

  constructor(private http:HttpClient) { }

  // Create event
  createShop(shop:ShoppingCart):Observable<ShoppingCart>{
    return this.http.post<ShoppingCart>(this.apiUrl,shop);

  }
}

