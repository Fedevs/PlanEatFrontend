import { configureStore } from "@reduxjs/toolkit";
import mealTimesReducer from "./features/mealTimesSlice";

export const store = configureStore({
  reducer: { mealTimes: mealTimesReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
