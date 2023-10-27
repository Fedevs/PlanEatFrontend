import IngredientCard from "@/app/components/IngredientCard/IngredientCard";
import getAllIngredientsServer from "@/app/hooks/getAllIngredientsServer";
import { IngredientInterface } from "@/types/types";
import "./Ingredients.scss";

export default async function Ingredients() {
  const ingredients = await getAllIngredientsServer();
  return (
    <section className='ingredients mt-5 gap-4 px-5'>
      {ingredients.map((ingredient: IngredientInterface) => (
        <IngredientCard key={ingredient.id} {...ingredient} />
      ))}
    </section>
  );
}
