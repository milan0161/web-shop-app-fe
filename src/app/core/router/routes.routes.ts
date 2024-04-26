import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminProductsPageComponent } from 'src/app/modules/product/pages/admin-products-page/admin-products-page.component';
import { AdminGuard } from '../guards/admin.guard';
import { ProductsPageComponent } from 'src/app/modules/product/pages/products-page/products-page.component';
import { CartPageComponent } from '../../modules/cart/cart-page/cart-page.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'admin-products',
            pathMatch: 'full',
          },
          {
            path: 'admin-products',
            canActivate: [AdminGuard],
            component: AdminProductsPageComponent,
          },
        ],
      },
      {
        path: 'products',
        component: ProductsPageComponent,
      },
      {
        path: 'cart',
        component: CartPageComponent,
      },
    ],
  },

  { path: '', component: HomeComponent },
];
