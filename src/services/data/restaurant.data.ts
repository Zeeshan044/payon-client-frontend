import { useMutation, useQuery, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@/constants";
import { restaurantClient } from "../client/restaurant.client";
import { IRestaurantRequest, IRestaurantResponse } from "@/types/api";

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
    onSuccess: (data) => {
      console.log("Resturant added successfully:", data);
      client.invalidateQueries("restaurant/getAll");
    },
    onError: (error: any) => {
      console.error("Error adding restaurant:", error);
    },
  });
}

export function useUpdateRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({
      restaurantId,
      data,
    }: {
      restaurantId: number;
      data: IRestaurantRequest;
    }) => restaurantClient.update(restaurantId, data),
    onSuccess: () => {
      console.log("Restaurant updated successfully");
      client.invalidateQueries("restaurant/getAll");
    },
    onError: (error: any) => {
      console.error("Error updating restaurant:", error);
    },
  });
}

export function useDeleteRestaurantMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (restaurantId: number) => restaurantClient.delete(restaurantId),
    onSuccess: () => {
      console.log("Restaurant deleted successfully");
      client.invalidateQueries("restaurant/getAll");
    },
    onError: (error: any) => {
      console.error("Error deleting restaurant:", error);
    },
  });
}
