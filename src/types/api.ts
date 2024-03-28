import { CategoryFormValues } from "@/schema/category-form.schema";
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
  // image: string | null;
}
export interface ICategoryResponse extends ICategoryRequest {
  id: number;
  created_at: string;
  updated_at: string;
}
export interface Category {
  id: number;
  name: string;
  description: string;
  products: IProduct[];
}
export interface IProductRequest {
  name: string;
  products: IProduct[];
  description: string;
  image: string | null;
  price: number;
  categories: Category[];
  category_id: number;
  ingredients: string;
  allergen: string[];
}
interface Addon {
  id: number;
  name: string;
  price: number;
}

interface Allergen {
  id: number;
  name: string;
}
export interface IProduct {
  id: number;
  title: string;
  image: string;
  ingredients: string;
  price: number;
  addon_ids: number[];
  addons: Addon[];
  allergen_ids: number[];
  allergen: Allergen[];
}
interface Restaurant {
  id: number;
  name: string;
  description: string;
  email: string;
  address: string;
  contact_number: string;
  cover_image: string;
  profile_image: string;
}
export interface IProductResponse {
  categories: Category[];
  restaurant: Restaurant;
}

export interface IProduct {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  description: string;
}

export interface IAddonsRequest {
  name: string;
  price: number;
}

export interface IAddonResponse extends IAddonsRequest {
  id: number;
  created_at: string;
  updated_at: string;
}
export interface IAllergenRequest {
  name: string;
  price: number;
}

export interface IAllergenResponse extends IAllergenRequest {
  id: number;
  created_at: string;
  updated_at: string;
}
export interface IUserUpdateRequest {
  image: File | null;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IUserResponse extends IUserUpdateRequest {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface IRestaurantRequest {
  name: string;
  description: string;
  profile_image: string | null;
  cover_image: string | null;
  email: string;
  phone: string;
  address: string;
  branch: string;
}

export interface IRestaurantResponse extends IRestaurantRequest {
  id: number;
  created_at: string;
  updated_at: string;
}
