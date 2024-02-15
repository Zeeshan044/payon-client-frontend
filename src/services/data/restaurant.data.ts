import { useMutation, useQuery, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@/constants";
import { restaurantClient } from "../client/restaurant.client";
import { IRestaurantRequest } from "@/types/api";

export function useGetUserRestaurantsQuery(user_id: number) {
  return useQuery({
    queryKey: [API_ENDPOINTS.RESTAURANT, "USER_RESTAURANTS"],
    queryFn: () => restaurantClient.getUserRestaurants(user_id),
  });
}

export function useCreateRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) => restaurantClient.create(data),
    onSuccess: (data, response) => {
      console.log("Resturant added successfully:", data);
      console.log(
        "Response received on successful restaurant creation:",
        response
      );
      client.invalidateQueries([API_ENDPOINTS.RESTAURANT, "USER_RESTAURANTS"]);
    },
  });
}

export function useUpdateRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: IRestaurantRequest }) =>
      restaurantClient.update(id, data),
    onSuccess: (data) => {
      console.log("Restaurant updated successfully", data);
      client.invalidateQueries([API_ENDPOINTS.RESTAURANT, "USER_RESTAURANTS"]);
    },
    onError: (error) => {
      console.error("Error updating restaurant:", error);
    },
  });
}

export function useDeleteRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => restaurantClient.delete(id),
    onSuccess: () => {
      console.log("Restaurant deleted successfully");
      client.invalidateQueries([API_ENDPOINTS.RESTAURANT, "USER_RESTAURANTS"]);
    },
  });
}
