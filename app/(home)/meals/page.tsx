import MealCard from "@/app/components/MealCard/MealCard";
import { MealInterface } from "@/types/types";

async function getMeals() {
  const url = `${process.env.BASE_URL}meals`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch meals");
  }
  return res.json();
}

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
