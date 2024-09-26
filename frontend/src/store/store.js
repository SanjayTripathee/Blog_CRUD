import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../services/api/blogService";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  // to hit api
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([blogApi.middleware]),
});

