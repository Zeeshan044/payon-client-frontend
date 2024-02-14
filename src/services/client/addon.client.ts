import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { IAddonResponse } from "@/types/api";

export const addonClient = {
  getAll: () => {
    return HttpClient.get<IAddonResponse[]>(API_ENDPOINTS.ADDON);
  },
};
