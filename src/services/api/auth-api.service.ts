import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
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
      login: build.mutation({
        query: (body) => ({
          url: `/login`,
          method: "POST",
          body,
        }),
      }),
      register: build.mutation({
        query: (body) => ({
          url: `/register`,
          method: "POST",
          body,
        }),
      }),
      logout: build.mutation({
        query: () => ({
          url: `/logout`,
          method: "POST",
        }),
        onQueryStarted: (_, { queryFulfilled }) => {
          queryFulfilled
            .then(() => {
              localStorage.removeItem("token");
            })
            .catch((error) => {
              console.log("Error", error);
            });
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
