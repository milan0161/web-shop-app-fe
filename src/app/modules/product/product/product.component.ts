import {
  AfterContentInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Role } from '../../auth/login/models/login.model';
import { CartService } from '../../cart/cart.service';
import { ProductAdmin, ProductUser } from '../models/product.model';
import { Router } from '@angular/router';
import { DialogService } from '../../shared/custom/dialog/dialog.service';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { Subject, takeUntil, tap } from 'rxjs';
import { ProductService } from '../product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { DialogConfig } from '../../shared/custom/dialog/models/dialog.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements AfterContentInit, OnInit, OnDestroy {
  @Input() product!: ProductAdmin | ProductUser;
  @Input() role: Role = 'USER';
  destroyed$: Subject<void> = new Subject<void>();
  brand: any = '';
  showOptions: boolean = false;
  isAdminPage!: boolean;
  constructor(
    private cartService: CartService,
    private router: Router,
    private dialogService: DialogService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.checkAdminPage();
  }

  ngAfterContentInit(): void {
    if ('brandName' in this.product) {
      this.brand = this.product.brandName;
    } else {
      this.brand = this.product.brand.brandName;
    }
  }
  addToCart() {
    const { id, name, price } = this.product;
    this.cartService.addCartItem({
      product: {
        id,
        name,
        price,
      },
      quantity: 1,
    });
  }
  showChosedOption(option: string) {
    if (option === 'Remove') {
      this.dialogService
        .open<ConfirmationComponent, any>(ConfirmationComponent)
        .afterClosed()
        .pipe(
          tap((value) => (value ? this.removeProduct() : value)),
          takeUntil(this.destroyed$)
        )
        .subscribe();
    } else {
      this.dialogService.open<ProductFormComponent, ProductAdmin | ProductUser>(
        ProductFormComponent,
        { data: this.product! }
      );
    }
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  removeProduct() {
    this.productService.deleteProduct(this.product.id).subscribe();
  }

  private checkAdminPage() {
    this.isAdminPage = this.router.url === '/dashboard/admin-products';
  }
}
