import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './modules/shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
