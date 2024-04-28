import {PaginationRequest} from "./pagination.type";

export interface FilterAndPaginationRequest{
  pagination: PaginationRequest;
  query: string
}
