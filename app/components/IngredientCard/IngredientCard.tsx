import { IngredientInterface } from "@/types/types";
import Button, { ButtonProps } from "@/app/components/Button/Button";

import "./IngredientCard.scss";

export default function IngredientCard(props: IngredientInterface) {
  const editButtonProps: ButtonProps = {
    action: "edit",
    svgOptions: {
      height: 16,
      width: 16,
    },
    ariaLabel: "Edit ingredient",
    title: "Edit ingredient",
  };

  const closeButtonProps: ButtonProps = {
    action: "close",
    svgOptions: {
      height: 16,
      width: 16,
    },
    ariaLabel: "Remove the ingredient from the list",
    title: "Delete ingredient",
  };
  return (
    <div className='ingredient-card flex-column mb-2'>
      <div className='box mb-1'>
        <div className='icons-container flex gap-1'>
          <div className='round-btn'>
            <Button {...editButtonProps} />
          </div>
          <div className='round-btn'>
            <Button {...closeButtonProps} />
          </div>
        </div>
      </div>
      <span>
        <strong>{props.name}</strong>
      </span>
    </div>
  );
}
