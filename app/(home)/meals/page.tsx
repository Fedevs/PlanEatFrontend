import getMeals from "@/app/hooks/getMeals";
import { MealInterface } from "@/types/types";
import MealCard from "@/app/components/MealCard/MealCard";

export default async function Meals() {
  const meals = await getMeals();

  return (
    <section className='mt-3'>
      {meals.map((meal: MealInterface) => (
        <MealCard key={meal.id} {...meal} />
      ))}
    </section>
  );
}
