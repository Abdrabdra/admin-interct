import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "managementApi",
  baseQuery: baseQuery,
  tagTypes: [
    "category",
    "product-info-color",
    "product-info-decor",
    "product-info-frame",
    "place"
  ],
  endpoints: () => ({}),
});
