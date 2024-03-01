import {PaginationRequest} from "../../modules/shared/custom/pagination/types/pagination.type";
import {HttpParams, HttpResponse} from "@angular/common/http";
import {PAGE, SIZE} from "../constants/pagination-request-params-constants";
import {TOTAL_ITEMS, TOTAL_PAGES} from "../constants/pagination-headers";

export function setPaginationParams(paginationRequest:PaginationRequest){
  return new HttpParams().set(SIZE, paginationRequest.size).set(PAGE, paginationRequest.page);
}

export function getPaginationResponse<T>(response: HttpResponse<T>){
  return {
    totalItems: Number(response.headers.get(TOTAL_ITEMS)!),
    totalPages: Number(response.headers.get(TOTAL_PAGES)!),
    data: response.body!
  }
}
