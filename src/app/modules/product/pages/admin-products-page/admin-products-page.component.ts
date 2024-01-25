import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { UserService } from 'src/app/modules/user/user.service';
import { Subject, takeUntil } from 'rxjs';
import { DialogService } from 'src/app/modules/shared/custom/dialog/dialog.service';
import { ProductFormComponent } from '../../product-form/product-form.component';

@Component({
  selector: 'app-admin-products-page',
  templateUrl: './admin-products-page.component.html',
  styleUrls: ['./admin-products-page.component.scss'],
})
export class AdminProductsPageComponent implements OnDestroy {
  private destroyed$ = new Subject<void>();
  products$ = this.productService.getProductsAdmin();
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
          this.products$ = this.productService.getProductsAdmin();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
