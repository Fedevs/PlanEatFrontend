import "./NavigationBarButton.scss";
import Planners from "@/public/icons/calendar-icon.svg";
import Meals from "@/public/icons/menu-icon.svg";
import Ingredients from "@/public/icons/orange-icon.svg";
import MealTimes from "@/public/icons/watch-icon.svg";

type icon = "planners" | "meals" | "ingredients" | "mealTimes";

export interface NavigationBarButtonProps {
  tab: icon;
  text: string;
}

export default function NavigationBarButton(props: NavigationBarButtonProps) {
  const icon = {
    planners: Planners,
    meals: Meals,
    ingredients: Ingredients,
    mealTimes: MealTimes,
  };
  const IconComponent = icon[props.tab];

  return (
    <button className='navigation-bar-button flex-column justify-around'>
      <span className='icon'>
        <IconComponent />
      </span>
      <span className='text'>
        <strong>{props.text}</strong>
      </span>
    </button>
  );
}
