import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CreateProduct, Product} from "./models/product.model";
import {PaginationRequest, PaginationResult} from "../shared/custom/pagination/types/pagination.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  getProducts(paginationRequest: PaginationRequest): Observable<PaginationResult<Product[]>> {
    return this.httpClient.get<Product[]>('/v1/products', {
      params: this.setPaginationParams(paginationRequest),
      observe: 'response'
    }).pipe(map((res) => this.getPaginationResponse(res)
    ))
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

  private setPaginationParams(paginationRequest: PaginationRequest) {
    return new HttpParams().set('size', paginationRequest.size).set('page', paginationRequest.page);
  }

  private getPaginationResponse(response: HttpResponse<Product[]>): PaginationResult<Product[]> {
    return {
      totalItems: Number(response.headers.get('x-total')!),
      totalPages: Number(response.headers.get('x-pages')!),
      data: response.body!
    }
  }
}
