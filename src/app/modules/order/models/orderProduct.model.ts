import {CartItem} from "../../cart/models/cartItem.model";

export type CreateOrderProduct  = Omit<CartItem, 'product'> & {
  product: {
    id: number
  }
}
