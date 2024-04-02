import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './modules/shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { loggedUserInitializer } from './utils/logged-user-initializer';
import { AuthService } from './modules/auth/auth.service';
import { OrderModule } from './modules/order/order.module';
import { requestInterceptor } from './core/interceptors/request.interceptor';
import { ProductModule } from './modules/product/product.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { BASE_HTTP, setBaseHttp } from './core/utils/base-http-get';
import { CartModule } from './modules/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    SidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    ReactiveFormsModule,
    AuthModule,
    OrderModule,
    ProductModule,
    CartModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([requestInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: loggedUserInitializer,
      deps: [AuthService],
    },
    {
      provide: BASE_HTTP,
      useFactory: (httpClient: HttpClient) => setBaseHttp(httpClient),
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
