import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { UserService } from 'src/app/modules/user/user.service';
import { BehaviorSubject, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DialogService } from 'src/app/modules/shared/custom/dialog/dialog.service';
import { ProductFormComponent } from '../../product-form/product-form.component';
import { PaginationRequest } from '../../../shared/custom/pagination/types/pagination.type';

@Component({
  selector: 'app-admin-products-page',
  templateUrl: './admin-products-page.component.html',
  styleUrls: ['./admin-products-page.component.scss'],
})
export class AdminProductsPageComponent implements OnDestroy {
  private destroyed$ = new Subject<void>();
  perPageArray = [6, 12, 18];
  paginationRequest: PaginationRequest = {
    size: 6,
    page: 0,
  };
  pagination$ = new BehaviorSubject<PaginationRequest>(this.paginationRequest);
  products$ = this.pagination$
    .pipe(
      switchMap((paginationRequest) =>
        this.productService.getProductsAdmin(paginationRequest)
      )
    )
    .pipe(tap((res) => console.log(res)));
  currentUser$ = this.userService.loggedUser$;
  constructor(
    private productService: ProductService,
    private userService: UserService,
    private dialogService: DialogService
  ) {}

  addNewProduct() {
    this.dialogService
      .open<ProductFormComponent, any>(ProductFormComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        if (res) {
          this.pagination$.next(this.pagination$.getValue());
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  changePageNumber(pageNumber: number) {
    this.pagination$.next({ ...this.pagination$.getValue(), page: pageNumber });
  }
  changePerPage(perPage: number) {
    this.pagination$.next({ ...this.paginationRequest, size: perPage });
  }
}
