import { useQuery } from "react-query";
import { allergenClient } from "../client/allergen.cient";

export function useGetAllAllergensQuery() {
  return useQuery({
    queryKey: ["allergens"],
    queryFn: allergenClient.getAll,
  });
}
