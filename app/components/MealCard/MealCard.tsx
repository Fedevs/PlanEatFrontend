import "./MealCard.scss";
import { MealInterface } from "@/types/types";
import getIngredients from "@/app/hooks/getIngredients";
import formatIngredients from "@/app/utils/formatIngredients";

export default async function MealCard(props: MealInterface) {
  const ingredients = await getIngredients(props.id);

  return (
    <div className='meal-card flex my-5'>
      <div className='meal-card-container h-75 p-3 flex-column justify-around '>
        <h2 className='title m-1'>{props.name}</h2>
        <p className='ingredients align-self-start'>
          <b>Ingredients: </b> {formatIngredients(ingredients)}
        </p>
        <p className='features align-self-start'>
          Here we'll have some features icons like 'vegan', etc
        </p>
      </div>
    </div>
  );
}
