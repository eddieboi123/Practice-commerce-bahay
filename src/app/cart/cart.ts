import { Component } from '@angular/core';
import { Function } from '../services/function';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartItems: any[]=[];

  constructor(private method: Function){};

  ngOnInit(){
    this.cartItems = this.method.getCartItems();
  }

  get totalItems(){
    return this.method.getTotalItems();
  }

  get totalPrice(){
    return this.method.getTotalPrice();
  }
}
