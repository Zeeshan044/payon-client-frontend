import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { IAllergenResponse } from "@/types/api";

export const allergenClient = {
  getAll: () => {
    return HttpClient.get<IAllergenResponse[]>(API_ENDPOINTS.ALLERGEN);
  },
};
