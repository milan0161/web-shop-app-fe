import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateProduct, Product} from "./models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('/v1/products')
  }

  createProduct(createProduct: CreateProduct){
    this.httpClient.post('/v1/products', createProduct)
  }

  updateProduct(updateProduct: Product){
    this.httpClient.put('/v1/products', updateProduct)
  }

  deleteProduct(id: number){
    this.httpClient.delete('/v1/products/${id}')
  }

  getProductsAdmin():Observable<Product[]>{
    return this.httpClient.get<Product[]>('/v1/products/administrators')
  }
}
