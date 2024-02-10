import { useMutation, useQuery, useQueryClient } from "react-query";
import { categoryClient } from "../client/category.client";
import { ICategoryRequest, ICategoryResponse } from "@/types/api";

export function useGetAllCategoriesQuery() {
  return useQuery({
    queryKey: ["categories/getAll"],
    queryFn: categoryClient.getAll,
  });
}

export function useGetCategoryQuery(id: number) {
  return useQuery({
    queryKey: ["categories/get", id],
    queryFn: () => categoryClient.get(id),
  });
}

export function useCreateCategoryMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) => categoryClient.create(data),
    onSuccess: (data, variables, context) => {
      console.log("Create category successful:", data);
      client.invalidateQueries("categories/getAll");
    },
    onError: (error, variables, context) => {
      console.error("Create category error:", error);
    },
  });
}
export function useUpdateCategoryMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: ICategoryRequest }) =>
      categoryClient.update(id, data),
    onSuccess: () => {
      client.invalidateQueries("categories/getAll");
    },
  });
}
export function useDeleteCategoryMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => categoryClient.delete(id),
    onSuccess: () => {
      client.invalidateQueries("categories/getAll");
    },
  });
}
