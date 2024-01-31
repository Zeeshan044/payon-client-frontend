import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.100.97:8000/",
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => {
        return { url: "/login", method: "POST", body: data };
      },
    }),
  }),
});

export const { useLoginUserMutation } = loginApi;
