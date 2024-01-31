import { useMutation, useQuery, useQueryClient } from "react-query";
import { categoryClient } from "../client/category.client";
const data = {
  id: "123",
  name: "Category Name",
  description: "Category Description",
  restaurant_id: "456",
  createdAt: new Date(),
  updatedAt: new Date(),
};
export function useGetAllCategoriesQuery() {
  const client = useQueryClient();
  return useQuery({
    queryKey: ["categories/getAll"],
    queryFn: () => {
      return categoryClient.getAll();
    },
  });
}

export function useGetOneCategoryQuery(id: string) {
  return useQuery({
    queryKey: ["categories/getOne", id],
    queryFn: () => {
      return categoryClient.getOne(id);
    },
  });
}

export function useCreateCategoryMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; description: string }) => {
      return categoryClient.create(data);
    },
    onSuccess: () => {
      client.invalidateQueries("categories/getAll");
    },
  });
}
// export function useUpdateCategoryMutation() {
//   const client = useQueryClient();
//   return useMutation({
//     mutationFn: async (data: {
//       id: string;
//       name: string;
//       description: string;
//     }) => {
//       await categoryClient.update(data);
//     },
//     onSuccess: () => {
//       client.invalidateQueries("categories/getAll");
//     },
//   });
// }

export function useDeleteCategoryMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return categoryClient.delete(id);
    },
    onSuccess: () => {
      client.invalidateQueries("categories/getAll");
    },
  });
}
