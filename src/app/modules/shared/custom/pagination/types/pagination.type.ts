export interface PaginationRequest{
  page: number;
  size: number
}
export interface PaginationResult<T> {
  totalItems: number,
  totalPages: number
  data: T
}
