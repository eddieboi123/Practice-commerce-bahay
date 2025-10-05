import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Function {
  private products = [
    {name: "IPhone XR", price: 399, stocks: 987},
    {name: "POCO X7", price: 149, stocks: 3},
    {name: "infinix GT 30 Pro", price: 129, stocks: 5}
  ];

 

  getProducts(){
    return this.products;
  }

   cartItems: any[]=[];

  getCartItems(){
    return this.cartItems;
  }

  addToCart(product: any){
    if(product.stocks > 0){
      product.stocks -= 1;
    }

    const existingItem = this.cartItems.find(item => item.name === product.name);
    if(existingItem){
      existingItem.cartStock += 1;
    }
    else{
      this.cartItems.push({...product, cartStock: 1});
    }
  }

  getTotalItems(){
    let total = 0;
    for(let item of this.cartItems){
      total += item.cartStock;
    }
    return total;
  }

  getTotalPrice(){
    let total=0;
    for(let item of this.cartItems){
      total += item.price* item.cartStock;
    }
    return total;
  }
}
