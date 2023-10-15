"use client";

import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MealTimesInterface } from "@/types/types";
import { reorderMealTimesArray } from "@/app/utils/reorderMealTimesArray";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  fetchInitialData,
  setOrder,
} from "@/app/redux/features/mealTimesSlice";
import MealTimeCardWithDnd from "@/app/components/MealTimeCardWithDnd/MealTimeCardWithDnd";

const MealTimes: React.FC = () => {
  const dispatch = useAppDispatch();
  const mealTimes = useAppSelector(
    (state) => state.mealTimes.data
  ) as MealTimesInterface[];

  useEffect(() => {
    if (!mealTimes.length) {
      dispatch(fetchInitialData());
    }
  }, [dispatch, mealTimes.length]);

  const handleDrop = (draggedIndex: number, dropIndex: number) => {
    const items = reorderMealTimesArray(
      [...mealTimes],
      draggedIndex,
      dropIndex
    );
    dispatch(setOrder(items));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className='mt-3 flex-column gap-6'>
        <h3 style={{ fontSize: "14px" }}>
          These are the meals available when creating a planner
        </h3>
        {mealTimes?.map((mealTime: MealTimesInterface, index: number) => (
          <MealTimeCardWithDnd
            key={mealTime.id}
            mealTime={mealTime}
            index={index}
            handleDrop={handleDrop}
          />
        ))}
      </section>
    </DndProvider>
  );
};

export default MealTimes;
