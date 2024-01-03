import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './modules/shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
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
