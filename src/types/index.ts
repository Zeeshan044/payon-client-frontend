export interface IUser {
  id: number;
  name: string;
  email: string;
  image: null | string;
  role: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export type MenuCategory = {
  id: string;
  name: string;
  menuItems: string[];
};

export type MenuItem = {
  id: string;
  category: string;
  name: string;
  available: boolean;
  description: string;
  price: number;
  deal: number | null | undefined;
  coverPhoto: string | null;
};

export type TableOrderItem = {
  id: string;
  createdAt: string;
  usersId: string[];
  server: ServerItem;
  orders: Order[];
  minGuests: number;
  table: TableItem;
  state: TableOrderState;
  orderCount: number;
};
export type ServerItem = {
  id: string;
  createdAt: string;
  name: string;
  available: boolean;
  profilePicture: string | null;
};
export type TableItem = {
  id: string;
  createdAt: string;
  name: string;
  capacity: number;
  available: boolean;
};

export type PaymentMode = "cash" | "card" | "applePay";

export type TableOrderState =
  | "pending"
  | "progress"
  | "confirmed"
  | "completed"
  | "closed";

export type TableCardItem = {
  tableOrder: TableOrderItem;
  orderNumber: number;
  orderedAt: string;
  state?: TableOrderState;
};

export interface Table {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Addon {
  id: number;
  name: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  note: string | null;
  addons: Addon[];
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: number;
  total_price: number;
  status: string;
  state: "pending" | "confirmed" | "completed";
  table: Table;
  order_items: OrderItem[];
  customer: Customer;
  created_at: string;
  updated_at: string;
}

// export interface Restaurant {
//   id: number;
//   user_id: number;
//   name: string;
//   description: string;
//   cover_image: string;
//   profile_image: string;
//   email: string;
//   phone: string;
//   address: string;
//   created_at: string;
//   updated_at: string;
// }
