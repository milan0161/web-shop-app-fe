import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { switchMap } from 'rxjs';
import { BasePaginationService } from 'src/app/core/services/base-pagination.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  providers: [BasePaginationService],
})
export class ProductsPageComponent {
  perPageArray = [6, 12, 18];

  products$ = this.paginationService.pagination$.pipe(
    switchMap((paginationRequest) =>
      this.productService.getProducts(paginationRequest)
    )
  );

  constructor(
    private productService: ProductService,
    private paginationService: BasePaginationService
  ) {}
  changePageNumber(pageNumber: number) {
    this.paginationService.changePage(pageNumber);
  }
  changePerPage(perPage: number) {
    this.paginationService.changePerPage(perPage);
  }
}
