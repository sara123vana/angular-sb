import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping_cart/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditshoppingService } from './editshopping.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-editshopping',
  imports: [FormsModule],
  templateUrl: './editshopping.component.html',
  styleUrl: './editshopping.component.css'
})
export class EditshoppingComponent implements OnInit{
  shop:any = {};
  constructor(
    private editShopService: EditshoppingService,
    private route: ActivatedRoute,
    private router: Router

  ){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        const id = Number(params.get('id'));
        if(id){
          this.editShopService.getShopById(id).subscribe(data =>{
            this.shop= data;
          });
        }
      });
  }
editShop(){
  this.editShopService.editShop(this.shop.id, this.shop).subscribe(response =>{
    alert('Shop Updated successfully!');
    this.router.navigate(['/viewshops']);

  }, error => {
    console.error('Error updating shop:',error);
  }
  
)
}
  
  }

