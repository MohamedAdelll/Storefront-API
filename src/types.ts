export type User = {
  username: string;
  id?: string;
  fName: string;
  lName: string;
  password: string;
  fname?: string;
  lname?: string;
};

export type Product = {
  id?: string;
  name: string;
  price: number;
  category: string;
};

export interface ProductInOrder {
  orderID?: string;
  productID: string;
  quantity: number;
}

export type Order = {
  order_id?: string;
  products: ProductInOrder[];
  userID: string;
  status: string;
};

export interface Error {
  name?: string;
  stack?: string;
  message?: string;
  status?: number;
}
