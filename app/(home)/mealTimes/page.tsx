import getMealTimes from "@/app/hooks/getMealTimes";
import { MealTimesInterface } from "@/types/types";
import MealTimeCard from "@/app/components/MealTimeCard/MealTimeCard";

export default async function MealTimes() {
  const mealTimes = await getMealTimes();

  return (
    <section className='mt-3 flex-column gap-6'>
      <h3 style={{ fontSize: "14px" }}>
        These are the meals available when creating a planner
      </h3>
      {mealTimes.map((mealTime: MealTimesInterface) => (
        <MealTimeCard key={mealTime.id} {...mealTime} />
      ))}
    </section>
  );
}
