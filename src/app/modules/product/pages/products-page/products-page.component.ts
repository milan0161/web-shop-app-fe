import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import {PaginationRequest} from "../../../shared/custom/pagination/types/pagination.type";
import {BehaviorSubject, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  perPageArray = [6,12,18]
  paginationRequest: PaginationRequest = {
    size: 6,
    page: 0
  }
  pagination$ = new BehaviorSubject<PaginationRequest>(this.paginationRequest)
  products$ = this.pagination$.pipe(switchMap((paginationRequest) => this.productService.getProducts(paginationRequest).pipe(tap((res) => console.log(res)))));
  constructor(private productService: ProductService) {}
  //waiting to get pageSize, pageNumber, totalPages, totalProducts
  changePageNumber(pageNumber: number){
    this.pagination$.next({...this.pagination$.getValue(), page: pageNumber})
  }
  changePerPage(perPage:number){
    this.pagination$.next({...this.paginationRequest, size: perPage})
  }
}
