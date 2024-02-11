import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { Restaurant } from "@/types";

export const restaurantClient = {
  getAll: () => {
    return HttpClient.get(API_ENDPOINTS.RESTAURANT);
  },
  getUserRestaurants: (userId: number) => {
    return HttpClient.get<Restaurant[]>(
      `${API_ENDPOINTS.RESTAURANT}?user_id=${userId}`
    );
  },
  get: (restaurantId: number) => {
    return HttpClient.get<Restaurant>(
      `${API_ENDPOINTS.RESTAURANT}/${restaurantId}`
    );
  },
  create: (restaurantData: Restaurant) => {
    return HttpClient.post(API_ENDPOINTS.RESTAURANT, restaurantData);
  },
  update: (restaurantId: number, restaurantData: Restaurant) => {
    return HttpClient.put(
      `${API_ENDPOINTS.RESTAURANT}/${restaurantId}`,
      restaurantData
    );
  },
  delete: (restaurantId: number) => {
    return HttpClient.delete(`${API_ENDPOINTS.RESTAURANT}/${restaurantId}`);
  },
};
