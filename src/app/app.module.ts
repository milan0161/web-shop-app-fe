import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './modules/shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { loggedUserInitializer } from './utils/logged-user-initializer';
import { AuthService } from './modules/auth/auth.service';
import { requestInterceptor } from './utils/interceptors/request.interceptor';
import { OrderModule } from './modules/order/order.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    ReactiveFormsModule,
    AuthModule,
    OrderModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([requestInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: loggedUserInitializer,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
