import { Injectable } from '@angular/core';
import { data } from '../Mock-data';
import { Product } from '../Product';

@Injectable()
export class ProductService {
 products = data;
  constructor() { }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }

}