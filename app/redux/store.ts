import { configureStore } from "@reduxjs/toolkit";
import mealTimesReducer from "./features/mealTimesSlice";
import addMealFormReducer from "./features/addMealFormSlice";
import { addOrderToMealTimes, logger } from "../middlewares";

export const store = configureStore({
  reducer: { mealTimes: mealTimesReducer, addMealForm: addMealFormReducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      // .concat(logger)
      .concat(addOrderToMealTimes),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
