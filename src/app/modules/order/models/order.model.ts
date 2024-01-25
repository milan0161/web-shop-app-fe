import { Register } from '../../auth/register/models/register.model';

type City = string | { id: string };
interface CreateOrderProduct {
  product: {
    id: string;
  };
  quantity: number;
}
interface OrderDeliveryInfo {
  city: City;
  zip: string;
  street: string;
  number: string;
}
export interface CreateOrder {
  orderProducts: CreateOrderProduct[];
  orderDeliveryInfo: OrderDeliveryInfo;
}

type OrderUser = Omit<Register, 'password'>;

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
