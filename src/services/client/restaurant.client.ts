import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { IRestaurantResponse } from "@/types/api";
import { RestaurantFormValues } from "@/schema/restaurant-from.schema";

export const restaurantClient = {
  getAll: () => {
    return HttpClient.get<IRestaurantResponse[]>(API_ENDPOINTS.RESTAURANT);
  },
  getUserRestaurants: (user_id: number) => {
    return HttpClient.get<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}?user_id=${user_id}`
    );
  },
  get: (id: number) => {
    return HttpClient.get<IRestaurantResponse>(
      `${API_ENDPOINTS.RESTAURANT}/${id}`
    );
  },
  create: (data: FormData) => {
    return HttpClient.post<IRestaurantResponse[]>(
      API_ENDPOINTS.RESTAURANT,
      data
    );
  },
  update: (id: number, data: any) => {
    return HttpClient.post<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}/${id}?_method=PUT`,
      data
    );
  },
  delete: (id: number) => {
    return HttpClient.delete<IRestaurantResponse[]>(
      `${API_ENDPOINTS.RESTAURANT}/${id}`
    );
  },
};
