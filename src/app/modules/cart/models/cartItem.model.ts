import {Product} from "../../product/models/product.model";

export interface CartItem {
  product: CartProductDetails;
  quantity: number;
}

export type CartProductDetails = Omit<Product, 'quantity'>
