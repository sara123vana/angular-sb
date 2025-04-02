import { Component,OnInit} from '@angular/core';
import { Viewshoppings } from './viewshoppings.model';
import { ViewshoppingsService } from './viewshoppings.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewshoppings',
  imports: [CommonModule,RouterModule],
  templateUrl: './viewshoppings.component.html',
  styleUrl: './viewshoppings.component.css'
})
export class ViewshoppingsComponent implements OnInit {
  shops:Viewshoppings[] = [];
  constructor(private viewshoppingsService:ViewshoppingsService){ }
  ngOnInit(): void {
      this.getShops();
  }

  getShops(){
    this.viewshoppingsService.getShops().subscribe((shop)=>{
      this.shops=shop;
      console.log(this.shops)

    }
  )}

  deleteShop(id:any){
    if(confirm("Are you sure! Want to delete this?")){
      this.viewshoppingsService.deleteShops(id).subscribe(()=>{
      alert("Shop data deleted successfully.");
      this.shops=this.shops.filter((shop) => shop.id !==id);
      })
    }
  }

}
