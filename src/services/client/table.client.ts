import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { ITable } from "@/types/api";

export const tableClient = {
  getAll: () => {
    return HttpClient.get<ITable[]>(API_ENDPOINTS.TABLE);
  },
  getOne: (id: string) => {
    return HttpClient.get<ITable[]>(`${API_ENDPOINTS.TABLE}/${id}`);
  },
  create: (data: { name: string }) => {
    return HttpClient.post<ITable[]>(API_ENDPOINTS.TABLE, data);
  },
  update: (id: string, data: ITable) => {
    return HttpClient.put<ITable[]>(`${API_ENDPOINTS.TABLE}/${id}`, data);
  },
  delete: (id: string) => {
    return HttpClient.delete<ITable[]>(`${API_ENDPOINTS.TABLE}/${id}`);
  },
};
