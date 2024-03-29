import {Injectable} from '@angular/core';
import {HttpClient, } from "@angular/common/http";
import { Observable } from "rxjs";
import {CreateProduct, Product} from "./models/product.model";
import {PaginationRequest, PaginationResult} from "../shared/custom/pagination/types/pagination.type";
import {baseHttpGetWithPagination} from "../../core/utils/base-http-get";

const PRODUCTS = 'products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  getProducts(paginationRequest: PaginationRequest): Observable<PaginationResult<Product[]>> {
    return baseHttpGetWithPagination<Product[]>(PRODUCTS, paginationRequest, this.httpClient)
  }

  createProduct(createProduct: CreateProduct) {
    return this.httpClient.post(`/v1/products`, createProduct,)
  }

  updateProduct(updateProduct: Product) {
    return this.httpClient.put('/v1/products', updateProduct)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('/v1/products/${id}')
  }

  getProductsAdmin(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/v1/products/administrators')
  }
}
