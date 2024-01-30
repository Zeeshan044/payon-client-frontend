import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints(build) {
    return {
      getProducts: build.query({
        query: () => `/products`,
      }),
      getSingleProduct: build.query({
        query: (id) => `/products/${id}`,
      }),
      deleteProduct: build.mutation({
        query: (id) => ({
          url: `/products/${id}`,
          method: "DELETE",
        }),
      }),
      createProduct: build.mutation({
        query: (body) => ({
          url: `/products`,
          method: "POST",
          body,
        }),
      }),
      updateProduct: build.mutation({
        query: ({ id, body }) => ({
          url: `/products/${id}`,
          method: "PUT",
          body,
        }),
      }),
    };
  },
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productApi;
