import { MealInterface } from "@/types/types";
import { Middleware, Dispatch, AnyAction } from "redux";

export const logger: Middleware<{}, any, Dispatch<AnyAction>> =
  (store) => (next) => (action) => {
    if (process.env.NODE_ENV === "development") console.log(action);
    return next(action);
  };

export const addOrderToMealTimes: Middleware<{}, any, Dispatch<AnyAction>> =
  (store) => (next) => (action) => {
    let updatedAction = { ...action };
    if (action.type === "mealTimesSlice/fetchInitialData/fulfilled") {
      const mealTimesWithOrder = (action.payload as MealInterface[]).map(
        (item) => {
          return {
            id: item.id,
            name: item.name,
            order: item.id,
          };
        }
      );

      updatedAction = {
        ...updatedAction,
        payload: mealTimesWithOrder,
      };
    }
    return next(updatedAction);
  };
