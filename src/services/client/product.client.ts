import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { IProductRequest, IProductResponse } from "@/types/api";

export const productClient = {
  getAll: () => {
    return HttpClient.get<IProductResponse>(API_ENDPOINTS.PRODUCT);
  },
  get: (id: number) => {
    return HttpClient.get<IProductResponse>(`${API_ENDPOINTS.PRODUCT}/${id}`);
  },
  create: (data: FormData) => {
    return HttpClient.post(API_ENDPOINTS.PRODUCT, data, {
      // headers: { "Content-Type": "multipart/form-data" },
    });
  },
  update: (id: number, data: any) => {
    return HttpClient.post(`${API_ENDPOINTS.PRODUCT}/${id}?_method=PUT`, data);
  },
  delete: (id: number) => {
    return HttpClient.delete(`${API_ENDPOINTS.PRODUCT}/${id}`);
  },
};
