import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints(build) {
    return {
      getCategories: build.query({
        query: () => `/products/categories`,
      }),
    };
  },
});

export const { useGetCategoriesQuery } = menuApi;
