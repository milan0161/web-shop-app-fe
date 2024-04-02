import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { PaginationRequest } from '../../../shared/custom/pagination/types/pagination.type';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { BasePaginationService } from 'src/app/core/services/base-pagination.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  providers: [BasePaginationService],
})
export class ProductsPageComponent {
  perPageArray = [6, 12, 18];

  products$ = this.paginationService.pagination$
    .pipe(
      switchMap((paginationRequest) =>
        this.productService.getProducts(paginationRequest)
      )
    )
    .pipe(tap((res) => console.log(res)));

  constructor(
    private productService: ProductService,
    private paginationService: BasePaginationService
  ) {}
  //waiting to get pageSize, pageNumber, totalPages, totalProducts
  changePageNumber(pageNumber: number) {
    this.paginationService.changePage(pageNumber);
  }
  changePerPage(perPage: number) {
    this.paginationService.changePerPage(perPage);
  }
}
