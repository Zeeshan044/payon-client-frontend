import { IUser } from ".";

export interface IAPIResponse<T> {
  message: string;
  data: T;
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
