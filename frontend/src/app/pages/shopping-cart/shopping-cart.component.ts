import { Component } from '@angular/core';
import { ShoppingCart } from './shopcart.model';
import { FormsModule } from '@angular/forms';
import { ShoppingCartService } from '../shopping_cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  shops:ShoppingCart[]=[];
  newShop={
    shopname:'',
    location:'',
    date:'',
    description:'',
  }
  constructor(private shopCartService:ShoppingCartService){ }

  createShop(){
    this.shopCartService.createShop(this.newShop).subscribe((shop=>{
      this.shops.push(shop);
      alert('Login is successfully submitted');
      this.newShop={
        shopname:'',
        location:'',
        date:'',
        description:''
      }
     
    }))
  }

}
