import { Register } from '../../auth/register/models/register.model';

interface CreateOrderProduct {
  product: {
    id: string;
  };
  quantity: number;
}
interface CreateOrderDeliveryInfo {
  city: {
    id: string;
  };
  zip: string;
  street: string;
  number: string;
}
export interface CreateOrder {
  orderProducts: CreateOrderProduct[];
  orderDeliveryInfo: CreateOrderDeliveryInfo;
}

type OrderUser = Omit<Register, 'password'>;
type ExcludeCreateOrderDeliveryInfo = Omit<CreateOrderDeliveryInfo, 'city'>;
interface OrderDeliveryInfo extends ExcludeCreateOrderDeliveryInfo {
  city: string;
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
