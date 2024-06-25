import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import {
  CreateProduct,
  EditProduct,
  ProductAdmin,
  ProductUser,
} from './models/product.model';
import {
  PaginationRequest,
  PaginationResult,
} from '../shared/custom/pagination/types/pagination.type';
import { environment } from 'src/environments/environment.development';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { BasePaginationService } from 'src/app/core/services/base-pagination.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService {
  constructor(private paginationService: BasePaginationService) {
    super('PRODUCTS');
  }
  refetch$ = new BehaviorSubject<boolean>(false);
  getProducts(
    paginationRequest: PaginationRequest
  ): Observable<PaginationResult<ProductUser[]>> {
    return this.baseHttpGetPagination<ProductUser[]>(paginationRequest);
  }

  createProduct(createProduct: CreateProduct) {
    return this.httpClient
      .post(this.baseUrl, createProduct)
      .pipe(tap(() => this.refetch$.next(true)));
  }

  updateProduct(updateProduct: EditProduct) {
    return this.httpClient
      .put(this.baseUrl, updateProduct)
      .pipe(tap(() => this.refetch$.next(true)));
  }

  deleteProduct(id: number) {
    return this.httpClient
      .delete(`${this.baseUrl}/${id}`, {
        responseType: 'text',
      })
      .pipe(tap(() => this.refetch$.next(true)));
  }

  getProductsAdmin(
    paginationRequest: PaginationRequest
  ): Observable<PaginationResult<ProductAdmin[]>> {
    return this.refetch$.pipe(
      switchMap(() =>
        this.baseHttpGetPagination<ProductAdmin[]>(
          paginationRequest,
          'administrators'
        )
      )
    );
  }
}
