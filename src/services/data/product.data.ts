import { useMutation, useQuery, useQueryClient } from "react-query";
import { productClient } from "../client/product.client";
import { IProductRequest } from "@/types/api";

export function useGetAllProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: productClient.getAll,
  });
}

export function useGetProductQuery(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productClient.get(id),
  });
}

export function useCreateProductMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: IProductRequest) => productClient.create(data),
    onSuccess: () => {
      client.invalidateQueries(["products"]);
    },
  });
}

export function useUpdateProductMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: { id: number; data: IProductRequest }) =>
      productClient.update(data.id, data.data),
    onSuccess: () => {
      client.invalidateQueries(["products"]);
    },
  });
}

export function useDeleteProductMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => productClient.delete(id),
    onSuccess: () => {
      client.invalidateQueries(["products"]);
    },
  });
}