import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { PaginationRequest } from 'src/app/modules/shared/custom/pagination/types/pagination.type';
import { environment } from 'src/environments/environment.development';
import { SIZE, PAGE } from '../constants/pagination-request-params-constants';
import {
  TOTAL_ITEMS,
  TOTAL_PAGES,
  CURRENT_PAGE,
} from '../constants/pagination-headers';
import { Api } from '../config/apiRouteTypes';
import { apiConfig } from '../config/apiConfig';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected baseUrl = environment.apiUrl;
  httpClient = inject(HttpClient);

  constructor(@Inject('API_ROUTE') private apiRoute: Api) {
    this.baseUrl += apiConfig[this.apiRoute];
  }

  protected sePaginationParams(paginationRequest: PaginationRequest) {
    return new HttpParams()
      .set(SIZE, paginationRequest.size)
      .set(PAGE, paginationRequest.page);
  }

  protected getPaginationResponse<T>(response: HttpResponse<T>) {
    return {
      totalItems: Number(response.headers.get(TOTAL_ITEMS)!),
      totalPages: Number(response.headers.get(TOTAL_PAGES)!),
      currentPage: Number(response.headers.get(CURRENT_PAGE)),
      data: response.body!,
    };
  }

  protected baseHttpGetPagination<T>(
    paginationRequest: PaginationRequest,
    url?: string
  ) {
    const reqestUrl = url ? `${this.baseUrl}/${url}` : this.baseUrl;
    return this.httpClient
      .get<T>(reqestUrl, {
        observe: 'response',
        params: this.sePaginationParams(paginationRequest),
      })
      .pipe(map((res) => this.getPaginationResponse(res)));
  }
}
