import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProduct, Product } from './models/product.model';
import {
  PaginationRequest,
  PaginationResult,
} from '../shared/custom/pagination/types/pagination.type';
import {
  BASE_HTTP,
  // baseHttpGetWithPagination,
} from '../../core/utils/base-http-get';
import { environment } from 'src/environments/environment.development';

const PRODUCTS = 'products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseHttp = inject(BASE_HTTP);
  constructor(private httpClient: HttpClient) {}

  getProducts(
    paginationRequest: PaginationRequest
  ): Observable<PaginationResult<Product[]>> {
    return this.baseHttp(
      `${environment.apiUrl}/v1/products`,
      paginationRequest
    );
  }

  createProduct(createProduct: CreateProduct) {
    return this.httpClient.post(
      `${environment.apiUrl}/v1/products`,
      createProduct
    );
  }

  updateProduct(updateProduct: Product) {
    return this.httpClient.put(
      `${environment.apiUrl}/v1/products`,
      updateProduct
    );
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/v1/products/${id}`);
  }

  getProductsAdmin(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${environment.apiUrl}/v1/products/administrators`
    );
  }
}
