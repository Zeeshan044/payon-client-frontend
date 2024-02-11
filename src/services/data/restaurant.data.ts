import { useMutation, useQuery, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@/constants";
import { restaurantClient } from "../client/restaurant.client";
import { Restaurant } from "@/types";
import { HttpClient } from "../http.service";

export function useGetUserRestaurantsQuery(user_id: number) {
  return useQuery({
    queryKey: [API_ENDPOINTS.RESTAURANT, "USER_RESTAURANTS"],
    queryFn: () => restaurantClient.getUserRestaurants(user_id),
  });
}

export function useCreateRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (restaurantData: Restaurant) =>
      restaurantClient.create(restaurantData),
    onSuccess: () => {
      client.invalidateQueries(["restaurants"]);
    },
  });
}

export function useUpdateRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Restaurant }) =>
      restaurantClient.update(id, data),
    onSuccess: () => {
      client.invalidateQueries(["restaurants"]);
    },
  });
}

export function useDeleteRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (restaurantId: number) => restaurantClient.delete(restaurantId),
    onSuccess: () => {
      client.invalidateQueries(["restaurants"]);
    },
  });
}
