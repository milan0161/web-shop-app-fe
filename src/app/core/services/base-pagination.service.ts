import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaginationRequest } from 'src/app/modules/shared/custom/pagination/types/pagination.type';

@Injectable({
  providedIn: 'root',
})
export class BasePaginationService {
  private paginationRequest: PaginationRequest = {
    size: 6,
    page: 0,
  };
  private pagination = new BehaviorSubject<PaginationRequest>(
    this.paginationRequest
  );

  get pagination$() {
    return this.pagination.asObservable();
  }

  changePage(pageNumber: number) {
    this.pagination.next({ ...this.pagination.getValue(), page: pageNumber });
  }
  changePerPage(perPage: number) {
    this.pagination.next({ ...this.paginationRequest, size: perPage });
  }

  constructor() {}
}
