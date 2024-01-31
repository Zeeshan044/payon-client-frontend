import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";

interface ICategory {
  id: string;
  name: string;
  description: string;
  image?: any;
  restaurant_id: string;
  createdAt: string;
  updatedAt: string;
}
type response = ICategory[];

export const categoryClient = {
  getAll: () => {
    return HttpClient.get<response>(API_ENDPOINTS.CATEGORY);
  },
  getOne: (id: string) => {
    return HttpClient.get<ICategory>(`${API_ENDPOINTS.CATEGORY}/${id}`);
  },
  create: (data: { name: string; description: string }) => {
    return HttpClient.post<ICategory>(API_ENDPOINTS.CATEGORY, data);
  },
  update: (id: string, data: ICategory) => {
    return HttpClient.put<ICategory>(`${API_ENDPOINTS.CATEGORY}/${id}`, data);
  },
  delete: (id: string) => {
    return HttpClient.delete<ICategory>(`${API_ENDPOINTS.CATEGORY}/${id}`);
  },
};
