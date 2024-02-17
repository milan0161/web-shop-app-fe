import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {CreateProduct, Product} from "./models/product.model";
import {PaginationRequest} from "../shared/custom/pagination/types/pagination.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getProducts(paginationRequest: PaginationRequest): Observable<Product[]>{
    return this.httpClient.get<Product[]>('/v1/products',  {params: this.setPaginationParams(paginationRequest)}).pipe(tap(res => console.log(res)))
  }

  createProduct(createProduct: CreateProduct){
    return this.httpClient.post(`/v1/products`, createProduct,)
  }

  updateProduct(updateProduct: Product){
    return this.httpClient.put('/v1/products', updateProduct)
  }

  deleteProduct(id: number){
    return this.httpClient.delete('/v1/products/${id}')
  }

  getProductsAdmin():Observable<Product[]>{
    return this.httpClient.get<Product[]>('/v1/products/administrators')
  }

  private setPaginationParams(paginationRequest: PaginationRequest){
    return new HttpParams().set('size', paginationRequest.size).set('page', paginationRequest.page);
  }
}
