import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { Restaurant } from "@/types";
import { IRestaurantResponse } from "@/types/api";
import { RestaurantFormValues } from "@/schema/restaurant-from.schema";

export const restaurantClient = {
  getAll: () => {
    return HttpClient.get<IRestaurantResponse[]>(API_ENDPOINTS.RESTAURANT);
  },
  getUserRestaurants: (userId: number) => {
    return HttpClient.get<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}?user_id=${userId}`
    );
  },
  get: (restaurantId: number) => {
    return HttpClient.get<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}/${restaurantId}`
    );
  },
  create: (data: FormData) => {
    return HttpClient.post<IRestaurantResponse[]>(
      API_ENDPOINTS.RESTAURANT,
      data
    );
  },
  update: (restaurantId: number, data: any) => {
    return HttpClient.post<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}/${restaurantId}`,
      data
    );
  },
  delete: (restaurantId: number) => {
    return HttpClient.delete<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}/${restaurantId}`
    );
  },
};
