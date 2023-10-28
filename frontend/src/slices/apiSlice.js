import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    
const baseQuery = fetchBaseQuery({ baseQuery: "" });

export const apiSlice = createApi({
  baseQuery,
  tagType: ["User"],
  endpoints: (builder) => ({}),
});
