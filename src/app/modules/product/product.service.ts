import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";
import {CreateProduct, Product} from "./models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/products`)
  }

  createProduct(createProduct: CreateProduct){
    this.httpClient.post(`${environment.apiUrl}/products`, createProduct)
  }

  updateProduct(updateProduct: Product){
    this.httpClient.put(`${environment.apiUrl}/products`, updateProduct)
  }

  deleteProduct(id: number){
    this.httpClient.delete(`${environment.apiUrl}/products/${id}`)
  }

  getProductsAdmin():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/products/administrators`)
  }
}
