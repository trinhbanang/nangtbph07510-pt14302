import { Injectable } from '@angular/core';
import { data } from '../Mock-data';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
 products = data;
  api = 'https://5e79b4b817314d00161333da.mockapi.io'
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