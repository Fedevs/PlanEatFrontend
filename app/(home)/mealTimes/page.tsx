"use client";

import MealTimeCard from "@/app/components/MealTimeCard/MealTimeCard";
import { MealTimesInterface } from "@/types/types";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { fetchInitialData } from "@/app/redux/features/mealTimesSlice";

export default function MealTimes() {
  const dispatch = useAppDispatch();
  const mealTimes = useAppSelector((state) => state.mealTimes.data);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  return (
    <section className='mt-3 flex-column gap-6'>
      <h3 style={{ fontSize: "14px" }}>
        These are the meals available when creating a planner
      </h3>
      {mealTimes?.map((mealTime: MealTimesInterface) => (
        <MealTimeCard key={mealTime.id} {...mealTime} />
      ))}
    </section>
  );
}
