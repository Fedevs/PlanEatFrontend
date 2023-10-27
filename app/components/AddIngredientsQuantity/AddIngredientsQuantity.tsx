import { IngredientInterface } from "@/types/types";
import "./AddIngredientsQuantity.scss";

interface AddIngredientsQuantityProps {
  ingredient: IngredientInterface;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

export default function AddIngredientsQuantity(
  props: AddIngredientsQuantityProps
) {
  return (
    <div className='add-ingredients-quantity flex justify-around mt-1 w-100'>
      <div className='ingredient-name'>
        <b>{props.ingredient.name}</b>
      </div>
      <input
        type='number'
        className='py-1'
        min={1}
        placeholder='10'
        required
        onChange={(e) => props.onChange(e, props.ingredient.id)}
      />
      <span className='ingredient-unit ml-1'>
        <small title={props.ingredient.unit}>{props.ingredient.unit}</small>
      </span>
    </div>
  );
}
