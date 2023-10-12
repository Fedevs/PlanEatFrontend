import IngredientCard from "@/app/components/IngredientCard/IngredientCard";
import getAllIngredients from "@/app/hooks/getAllIngredients";
import { IngredientInterface } from "@/types/types";
import "./Ingredients.scss";

export default async function Ingredients() {
  const ingredients = await getAllIngredients();
  return (
    <section className='ingredients mt-5 gap-4 px-5'>
      {ingredients.map((ingredient: IngredientInterface) => (
        <IngredientCard key={ingredient.id} {...ingredient} />
      ))}
    </section>
  );
}
