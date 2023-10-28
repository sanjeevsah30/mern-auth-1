import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlices";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: { auth: authSlice,
[apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  devTools: true,
});

export default store;
