import { Injectable } from '@angular/core';
import { data } from '../Mock-data';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
 products = data;
  api = 'https://5e7b6f3b0e04630016333391.mockapi.io'
  constructor(
    private http: HttpClient
  ) { }
  
    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/product`);
      
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
    removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }

}