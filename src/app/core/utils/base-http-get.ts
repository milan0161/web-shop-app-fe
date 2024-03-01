import {HttpClient} from "@angular/common/http";
import {getPaginationResponse, setPaginationParams} from "./pagination-params";
import {map} from "rxjs";
import {PaginationRequest} from "../../modules/shared/custom/pagination/types/pagination.type";

export function baseHttpGetWithPagination<T>(httpClient: HttpClient, paginationRequest: PaginationRequest){
  return httpClient.get<T>('/v1/products', {
    params: setPaginationParams(paginationRequest),
    observe: 'response'
  }).pipe(map((res) => getPaginationResponse(res)))
}
