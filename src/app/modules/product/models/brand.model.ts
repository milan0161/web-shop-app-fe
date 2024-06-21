export type Brand = {
  id: number;
  brandName: string;
};

export type CreateProductBrand = Omit<Brand, 'brandName'>;
