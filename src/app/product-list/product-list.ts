import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Function } from '../services/function';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  SearchProduct='';
  products:any[]=[];

  constructor(private method: Function){}

  ngOnInit(){
    this.products = this.method.getProducts();
  }

  get filteredProduct(){
    return this.products.filter
    (product => product.name.toLowerCase().includes(this.SearchProduct.toLocaleLowerCase())
  );
  }

  addToCart(product: any){
    this.method.addToCart(product);
    alert("Item added!");
  }
  
}
