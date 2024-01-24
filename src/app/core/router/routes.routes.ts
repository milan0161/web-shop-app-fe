import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminProductsPageComponent } from 'src/app/modules/product/pages/admin-products-page/admin-products-page.component';
import { AdminGuard } from '../guards/admin.guard';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard()],
    component: DashboardComponent,
    children: [
      {
        path: 'admin-products',
        canActivate: [AdminGuard()],
        component: AdminProductsPageComponent,
      },
    ],
  },
  { path: '', component: HomeComponent },
];
