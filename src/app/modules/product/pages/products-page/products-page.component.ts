import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import {PaginationRequest} from "../../../shared/custom/pagination/types/pagination.type";
import {BehaviorSubject, switchMap} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  perPageArray = [12,24,32]
  paginationRequest: PaginationRequest = {
    size: 12,
    page: 0
  }
  pagination$ = new BehaviorSubject<PaginationRequest>(this.paginationRequest)
  products$ = this.pagination$.pipe(switchMap((paginationRequest) => this.productService.getProducts(paginationRequest)));
  constructor(private productService: ProductService) {}
  //waiting to get pageSize, pageNumber, totalPages, totalProducts
  changePageNumber(pageNumber: number){
    this.pagination$.next({...this.pagination$.getValue(), page: pageNumber})
  }
  changePerPage(perPage:number){
    console.log(perPage)
    this.pagination$.next({...this.pagination$.getValue(), size: perPage})
  }
}
