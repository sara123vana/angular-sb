import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ViewshoppingsComponent } from './pages/viewshoppings/viewshoppings.component';
import { EditshoppingComponent } from './pages/editshopping/editshopping.component';

export const routes: Routes = [
    {
    path:'',
    component: HomeComponent
    },
    {
        path:'shopping_cart',
        component: ShoppingCartComponent
    },
    {
        path:'viewshoppings',
        component: ViewshoppingsComponent
    },
    {
        path:'editshop/:id',
        component: EditshoppingComponent
    }
   
];
