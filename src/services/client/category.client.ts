import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { ICategoryResponse } from "@/types/api";

export const categoryClient = {
  getAll: () => {
    return HttpClient.get<ICategoryResponse[]>(API_ENDPOINTS.CATEGORY);
  },
  get: (id: string) => {
    return HttpClient.get<ICategoryResponse[]>(
      `${API_ENDPOINTS.CATEGORY}/${id}`
    );
  },
  create: (data: FormData) => {
    return HttpClient.post<ICategoryResponse[]>(
      `${API_ENDPOINTS.CATEGORY}?_method=POST`,
      data
    );
  },
  update: (id: number, data: any) => {
    return HttpClient.post<ICategoryResponse[]>(
      `${API_ENDPOINTS.CATEGORY}/${id}?_method=PUT`,
      data
    );
  },
  delete: (id: number) => {
    return HttpClient.delete<ICategoryResponse[]>(
      `${API_ENDPOINTS.CATEGORY}/${id}`
    );
  },
};
