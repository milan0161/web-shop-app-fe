import { OrderDeliveryInfo } from './orderDelivery.model';
import { CreateOrderProduct } from './orderProduct.model';
import { OrderUser } from './orderUser';

export interface CreateOrder {
  orderProducts: CreateOrderProduct[];
  orderDeliveryInfo: OrderDeliveryInfo;
}

interface OrderProduct {
  name: string;
  price: number;
  orderQuantity: number;
}
export interface Order {
  id: number;
  date: Date;
  total: number;
  orderProducts: OrderProduct[];
  user: OrderUser;
  orderDeliveeryInfo: OrderDeliveryInfo;
}
