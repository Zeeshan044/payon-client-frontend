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
    onSuccess: () => {
      client.invalidateQueries("categories/getAll");
    },
  });
}

export function useUpdateCategoryMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: ICategoryResponse) =>
      categoryClient.update(data.id, data),
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