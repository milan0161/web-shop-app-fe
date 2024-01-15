interface OrderProduct {
  product: {
    id: string;
  },
  quantity: number
}
interface OrderDeliveryInfo {
  city: {
    id: string
  },
  zip: string,
  street: string,
  number: string
}
export interface CreateOrder  {
  orderProducts: OrderProduct [],
  orderDeliveryInfo: OrderDeliveryInfo
}


// [
//   {
//     "id": 0,
//     "date": 0,
//     "total": 0,
//     "orderProducts": [
//       {
//         "name": "string",
//         "price": 0,
//         "orderQuantity": 0,
//         "user": {
//           "firstName": "string",
//           "lastName": "string",
//           "username": "string",
//           "userContactInfo": {
//             "email": "string",
//             "contactPhone": "string"
//           }
//         }
//       }
//     ],
//     "user": {
//       "firstName": "string",
//       "lastName": "string",
//       "username": "string",
//       "userContactInfo": {
//         "email": "string",
//         "contactPhone": "string"
//       }
//     },
//     "orderDeliveryInfo": {
//       "street": "string",
//       "number": "string",
//       "city": "string",
//       "zip": "string"
//     }
//   }
// ]
