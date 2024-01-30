import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints(build) {
    return {
      getCategories: build.query({
        query: () => `/categories`,
        transformResponse: (response: any) => {
          return response.data;
        },
      }),
      getSingleCategory: build.query({
        query: (id) => `/categories/${id}`,
      }),
      deleteCategory: build.mutation({
        query: (id) => ({
          url: `/categories/${id}`,
          method: "DELETE",
        }),
      }),
      createCategory: build.mutation({
        query: (body) => ({
          url: `/categories`,
          method: "POST",
          body,
        }),
      }),
      updateCategory: build.mutation({
        query: ({ id, body }) => ({
          url: `/categories/${id}`,
          method: "PUT",
          body,
        }),
      }),
    };
  },
});

export const { useGetCategoriesQuery } = categoryApi;
