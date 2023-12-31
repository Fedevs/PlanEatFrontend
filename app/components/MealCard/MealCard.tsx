import getMealIngredients from "@/app/hooks/getMealIngredients";
import { MealInterface } from "@/types/types";
import formatIngredients from "@/app/utils/formatIngredients";
import Button, { ButtonProps } from "@/app/components/Button/Button";
import "./MealCard.scss";

export default async function MealCard(props: MealInterface) {
  const ingredients = await getMealIngredients(props.id);

  const editButtonProps: ButtonProps = {
    action: "edit",
    svgOptions: {
      height: 18,
      width: 18,
    },
    ariaLabel: "Edit meal features",
    title: "Edit meal",
  };

  const closeButtonProps: ButtonProps = {
    action: "close",
    svgOptions: {
      height: 18,
      width: 18,
    },
    ariaLabel: "Remove the meal from the list",
    title: "Delete meal",
  };

  return (
    <div className='meal-card flex my-5'>
      <div className='meal-card-container h-75 p-3 flex-column justify-around '>
        <div className='icons-container flex pt-1'>
          <div className='flex justify-end mr-6'>
            <Button {...editButtonProps} />
          </div>
          <div className='flex justify-end'>
            <Button {...closeButtonProps} />
          </div>
        </div>
        <h2 className='title m-1'>{props.name}</h2>
        <p className='ingredients align-self-start'>
          <b>Ingredients: </b> {formatIngredients(ingredients)}
        </p>
        <p className='features align-self-start'>
          Here we will have some features icons like [VEGAN, VEGETARIAN, GLUTEN
          FREE], etc
        </p>
      </div>
    </div>
  );
}
