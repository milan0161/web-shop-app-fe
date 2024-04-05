import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { Brand } from './models/brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService extends BaseHttpService {
  constructor() {
    super('BRAND');
  }

  getBrands() {
    return this.httpClient.get<Brand[]>(this.baseUrl);
  }
}
