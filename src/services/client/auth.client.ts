import { HttpClient } from "@/services/http.service";
import { API_ENDPOINTS } from "@/constants";
import { IAuthResponse } from "@/types/api";

export const authClient = {
  login: (variables: { email: string; password: string }) => {
    return HttpClient.post<IAuthResponse>(API_ENDPOINTS.LOGIN, variables);
  },
  logout: () => {
    return HttpClient.post<any>(API_ENDPOINTS.LOGOUT, {});
  },
};
