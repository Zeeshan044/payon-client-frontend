import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { ICategoryResponse } from "@/types/api";

export const categoryClient = {
  getAll: () => {
    return HttpClient.get<ICategoryResponse[]>(API_ENDPOINTS.CATEGORY);
  },
  get: (id: number) => {
    return HttpClient.get(`${API_ENDPOINTS.CATEGORY}/${id}`);
  },
  create: (data: FormData) => {
    return HttpClient.post(API_ENDPOINTS.CATEGORY, data);
  },
  update: (id: number, data: any) => {
    return HttpClient.post(`${API_ENDPOINTS.CATEGORY}/${id}?_method=PUT`, data);
  },
  delete: (id: number) => {
    return HttpClient.delete(`${API_ENDPOINTS.CATEGORY}/${id}`);
  },
};
