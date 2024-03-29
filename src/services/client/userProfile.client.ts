import { API_ENDPOINTS } from "@/constants";
import { HttpClient } from "../http.service";
import { IUserResponse } from "@/types/api";

export const userProfileClient = {
  get: (id: number) => {
    return HttpClient.get<IUserResponse>(`${API_ENDPOINTS.USERPROFILE}/${id}`);
  },
  update: (id: number, userData: any) => {
    return HttpClient.post<IUserResponse>(
      `${API_ENDPOINTS.USERPROFILE}/${id}?_method=PUT`,
      userData
    );
  },
};
