import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";

interface ITable {
  id: string;
  name: string;
  restaurant_id: string;
  qr_link: string;
  createdAt: string;
  updatedAt: string;
}

type response = ITable[];
export const tableClient = {
  getAll: () => {
    return HttpClient.get<response>(API_ENDPOINTS.TABLE);
  },
  getOne: (id: string) => {
    return HttpClient.get<response>(`${API_ENDPOINTS.TABLE}/${id}`);
  },
  create: (data: { name: string }) => {
    return HttpClient.post<response>(API_ENDPOINTS.TABLE, data);
  },
  update: (id: string, data: response) => {
    return HttpClient.put<response>(`${API_ENDPOINTS.TABLE}/${id}`, data);
  },
  delete: (id: string) => {
    return HttpClient.delete<response>(`${API_ENDPOINTS.TABLE}/${id}`);
  },
};
