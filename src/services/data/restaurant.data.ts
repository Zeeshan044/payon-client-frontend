import { API_ENDPOINTS } from "@/constants";
import { useQuery } from "react-query";
import { restaurantClient } from "../client/restaurant.client";

export function useGetUserRestaurantsQuery(user_id: number) {
  return useQuery({
    queryKey: [API_ENDPOINTS.RESTAURANT, "USER_RESTAURANTS"],
    queryFn: () => restaurantClient.getUserRestaurants(user_id),
  });
}
