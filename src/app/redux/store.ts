import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselSlice";

const store = configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
