import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CreateProduct, Product } from './models/product.model';
import {
  PaginationRequest,
  PaginationResult,
} from '../shared/custom/pagination/types/pagination.type';
import { environment } from 'src/environments/environment.development';
import { BaseHttpService } from 'src/app/core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService {
  constructor() {
    super('PRODUCTS');
  }

  getProducts(
    paginationRequest: PaginationRequest
  ): Observable<PaginationResult<Product[]>> {
    return this.baseHttpGetPagination<Product[]>(paginationRequest);
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

  getProductsAdmin(
    paginationRequest: PaginationRequest
  ): Observable<PaginationResult<Product[]>> {
    return this.baseHttpGetPagination<Product[]>(
      paginationRequest,
      'administrators'
    );
  }
}
