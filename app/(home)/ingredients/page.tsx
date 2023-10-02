import IngredientCard from "@/app/components/IngredientCard/IngredientCard";
import getAllIngredients from "@/app/hooks/getAllIngredients";
import { Ingredient } from "@/types/types";
import "./Ingredients.scss";

export default async function Ingredients() {
  const ingredients = await getAllIngredients();
  return (
    <section className='ingredients mt-5 gap-4 px-5'>
      {ingredients.map((ingredient: Ingredient) => (
        <IngredientCard key={ingredient.id} {...ingredient} />
      ))}
    </section>
  );
}
