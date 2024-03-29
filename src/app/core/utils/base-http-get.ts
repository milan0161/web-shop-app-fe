import { HttpClient } from '@angular/common/http';
import {
  getPaginationResponse,
  setPaginationParams,
} from './pagination-params';
import { Observable, map, tap } from 'rxjs';
import {
  PaginationRequest,
  PaginationResult,
} from '../../modules/shared/custom/pagination/types/pagination.type';
import { InjectionToken } from '@angular/core';
// export function baseHttpGetWithPagination<T>(
//   url: string,
//   paginationRequest: PaginationRequest,
//   httpClient: HttpClient
// ) {
//   return httpClient
//     .get<T>(`/v1/${url}`, {
//       params: setPaginationParams(paginationRequest),
//       observe: 'response',
//     })
//     .pipe(map((res) => getPaginationResponse(res)));
// }

export const BASE_HTTP = new InjectionToken<
  (
    url: string,
    paginationRequest: PaginationRequest
  ) => Observable<PaginationResult<any>>
>('BASE_HTTP');

export const setBaseHttp =
  (httpClient: HttpClient) =>
  (url: string, paginationRequest: PaginationRequest) =>
    httpClient
      .get(url, {
        params: setPaginationParams(paginationRequest),
        observe: 'response',
      })
      .pipe(
        map((res) => {
          console.log(res);
          return getPaginationResponse(res);
        }),
        tap((res) => console.log(res, 'tap'))
      );
