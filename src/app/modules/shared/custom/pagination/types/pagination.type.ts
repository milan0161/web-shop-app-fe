export interface PaginationRequest{
  page: number;
  size: number
}
export interface PaginationResult<T> {
  page: number;
  size: number;
  data: T
}
