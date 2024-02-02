import { ROUTES } from "@/constants/routes";
import { IAPIErrorResponse, IAPIResponse } from "@/types/api";
import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";
import router from "next/router";
import { toast } from "react-toastify";

// Create an Axios instance
const Axios: AxiosInstance = axios.create({
  baseURL:
    "https://c0d9-2400-adc5-127-9400-9b1-83f2-540e-3b39.ngrok-free.app/api",
  headers: {
    "Content-Type": "multipart/form-data",
    "ngrok-skip-browser-warning": "true",
  },
});

// Error interceptor
Axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError<IAPIErrorResponse>) => {
    toast.error(error.message);
    // Handle different error types here
    if (error.response) {
      // Handle 401 Unauthorized responses
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return router.push(ROUTES.login);
      }

      // @ts-ignore
      toast.error(error.response.data?.errors?.name?.join(", "));
    } else if (error.request) {
      // Handle network errors (e.g., no internet connection)
      // console.error('Network Error:', error.request);
    } else {
      // Handle other errors
      // console.error('Error:', error.message);
    }
    return Promise.resolve({});
  }
);

// Request interceptor
Axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add bearer token to the request if available
    // const { token } = getAuthCredentials();
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "application/json";
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export class HttpClient {
  //   static async paginate<T>(url: string, params?: unknown) {
  //     const response = await Axios.get<IAPIResponseWithPagination<T>>(url, {
  //       params,
  //     });
  //     return response.data.data;
  //   }

  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<IAPIResponse<T>>(url, { params });
    console.log(response);
    return response.data.data;
  }

  static async post<T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig<any>
  ) {
    const response = await Axios.post<IAPIResponse<T>>(url, data, options);
    return response.data.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<IAPIResponse<T>>(url, data);
    return response.data.data;
  }

  static async patch<T>(url: string, data: unknown) {
    const response = await Axios.put<IAPIResponse<T>>(url, data);
    return response.data.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<IAPIResponse<T>>(url);
    return response.data.data;
  }
}
