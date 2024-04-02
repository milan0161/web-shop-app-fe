import { Api } from './apiRouteTypes';

type ApiRoute = `/v1/${string}`;

export type ApiConfig = {
  [key in Api]: ApiRoute;
};

export const apiConfig: ApiConfig = {
  USERS: '/v1/users',
  BRAND: '/v1/brand',
  CITIES: '/v1/cities',
  ORDERS: '/v1/orders',
  PRODUCTS: '/v1/products',
};
