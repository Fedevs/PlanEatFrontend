import { MealTimesInterface } from "@/types/types";
import Button, { ButtonProps } from "@/app/components/Button/Button";
import ReorderIcon from "@/public/icons/reorder-icon.svg";
import "./MealTimeCard.scss";

export default function MealTimeCard(props: MealTimesInterface) {
  const editButtonProps: ButtonProps = {
    action: "edit",
    svgOptions: {
      height: 16,
      width: 16,
    },
    ariaLabel: "Edit meal time",
    title: "Edit meal time",
  };

  const closeButtonProps: ButtonProps = {
    action: "close",
    svgOptions: {
      height: 16,
      width: 16,
    },
    ariaLabel: "Remove the meal time from the list",
    title: "Delete meal time",
  };
  return (
    <div className='meal-time-card flex justify-start py-2 px-4'>
      <div className='icons-container flex gap-1'>
        <div className='round-btn'>
          <Button {...editButtonProps} />
        </div>
        <div className='round-btn'>
          <Button {...closeButtonProps} />
        </div>
      </div>
      <span className='icon flex'>
        <ReorderIcon />
      </span>
      <p className='m-0 w-100 flex'>
        <strong>{props.name}</strong>
      </p>
    </div>
  );
}
