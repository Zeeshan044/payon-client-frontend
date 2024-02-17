import { useQuery } from "react-query";
import { addonClient } from "../client/addon.client";

export function useGetAllAddonsQuery() {
  return useQuery({
    queryKey: ["addons"],
    queryFn: addonClient.getAll,
  });
}
