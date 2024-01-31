import { useMutation, useQuery, useQueryClient } from "react-query";
import { tableClient } from "../client/table.client";

export function useGetAllTablesQuery() {
  return useQuery({
    queryKey: ["tables/getAll"],
    queryFn: () => {
      return tableClient.getAll();
    },
  });
}

export function useGetOneTableQuery(id: string) {
  return useQuery({
    queryKey: ["tables/getOne", id],
    queryFn: () => {
      return tableClient.getOne(id);
    },
  });
}

export function useCreateTableMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; restaurant_id: string }) => {
      return tableClient.create(data);
    },
    onSuccess: () => {
      client.invalidateQueries("tables/getAll");
    },
  });
}
export function useDeleteTableMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return tableClient.delete(id);
    },
    onSuccess: (data, id) => {
      client.invalidateQueries("tables/getOne");
    },
  });
}
