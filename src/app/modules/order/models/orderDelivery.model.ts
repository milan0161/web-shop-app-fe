export interface OrderDeliveryInfo {
  city: City;
  zip: string;
  street: string;
  number: string;
}

type City = string | { id: string };
