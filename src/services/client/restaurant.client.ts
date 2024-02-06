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
};
