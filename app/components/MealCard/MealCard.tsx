import "./MealCard.scss";
import { MealInterface } from "@/types/types";
import getIngredients from "@/app/hooks/getIngredients";
import formatIngredients from "@/app/utils/formatIngredients";
import Button from "@/app/components/Button/Button";
import closeIcon from "@/public/icons/close-icon.svg";
import editIcon from "@/public/icons/edit-icon.svg";

export default async function MealCard(props: MealInterface) {
  const ingredients = await getIngredients(props.id);
  const closeButtonImageOptions = {
    height: 16,
    width: 16,
    src: closeIcon,
    alt: "Delete meal",
    ariaLabel: "Remove the meal from the list",
    title: "Delete meal",
  };
  const editButtonImageOptions = {
    height: 16,
    width: 16,
    src: editIcon,
    alt: "Edit meal",
    ariaLabel: "Change any attribute from the meal",
    title: "Edit meal",
  };

  return (
    <div className='meal-card flex my-5'>
      <div className='meal-card-container h-75 p-3 flex-column justify-around '>
        <div className='icons-container flex p-2'>
          <Button image={editButtonImageOptions} />
          <Button image={closeButtonImageOptions} />
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
