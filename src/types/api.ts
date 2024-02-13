import { IUser } from ".";

export interface IAPIResponse<T> {
  message: string;
  data: T;
}
export interface ITable {
  id: string;
  name: string;
  restaurant_id: string;
  qr_link: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAPIErrorResponse {
  message: string;
  error: {
    statusCode: number;
    message: string[];
  };
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}

export interface ICategoryRequest {
  name: string;
  description: string;
  image: string | null;
}
export interface ICategoryResponse extends ICategoryRequest {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface IProductRequest {
  name: string;
  description: string;
  image: string | null;
  price: number;
  category_id: number;
  ingredients: string;
}

export interface IProductResponse extends IProductRequest {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface IUserUpdateRequest {
  image: string | null;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface IUserResponse extends IUserUpdateRequest {
  id: number;
}

export interface IRestaurantRequest {
  name: string;
  description: string;
  image: string | null;
  email: string;
  phone: string;
  address: string;
  restaurant_id: number;
  branch: string;
}

export interface IRestaurantResponse extends IRestaurantRequest {
  id: number;
  created_at: string;
  updated_at: string;
}
