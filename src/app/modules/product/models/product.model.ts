import { Brand, CreateProductBrand } from './brand.model';

export interface ProductAdmin {
  id: number;
  name: string;
  price: number;
  quantity: number;
  brand: Brand;
}

export type CreateProduct = Omit<ProductAdmin, 'id' | 'brand'> & BrandId;

type BrandId = {
  brand: {
    id: number;
  };
};

type OmitBrand = Omit<ProductAdmin, 'brand'>;
export interface ProductUser extends OmitBrand {
  brandName: string;
}
