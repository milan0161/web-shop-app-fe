import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { UserService } from 'src/app/modules/user/user.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { DialogService } from 'src/app/modules/shared/custom/dialog/dialog.service';
import { ProductFormComponent } from '../../product-form/product-form.component';
import { BasePaginationService } from 'src/app/core/services/base-pagination.service';

@Component({
  selector: 'app-admin-products-page',
  templateUrl: './admin-products-page.component.html',
  styleUrls: ['./admin-products-page.component.scss'],
  providers: [BasePaginationService],
})
export class AdminProductsPageComponent implements OnDestroy {
  private destroyed$ = new Subject<void>();
  perPageArray = [6, 12, 18];

  products$ = this.paginationService.pagination$.pipe(
    switchMap((paginationRequest) =>
      this.productService.getProductsAdmin(paginationRequest)
    )
  );

  currentUser$ = this.userService.loggedUser$;
  constructor(
    private productService: ProductService,
    private userService: UserService,
    private dialogService: DialogService,
    private paginationService: BasePaginationService
  ) {}

  addNewProduct() {
    this.dialogService
      .open<ProductFormComponent, any>(ProductFormComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {});
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  changePageNumber(pageNumber: number) {
    this.paginationService.changePage(pageNumber);
  }
  changePerPage(perPage: number) {
    this.paginationService.changePerPage(perPage);
  }
}
