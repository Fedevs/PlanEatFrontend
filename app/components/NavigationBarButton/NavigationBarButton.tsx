"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Planners from "@/public/icons/calendar-icon.svg";
import Meals from "@/public/icons/menu-icon.svg";
import Ingredients from "@/public/icons/orange-icon.svg";
import MealTimes from "@/public/icons/watch-icon.svg";
import "./NavigationBarButton.scss";

type tab = "planners" | "meals" | "ingredients" | "mealTimes";

export interface NavigationBarButtonProps {
  tab: tab;
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
  const pathName = usePathname();
  const selected = pathName === `/${props.tab}`;

  return (
    <button className={`navigation-bar-button ${selected ? "selected" : ""}`}>
      <Link className='flex-column' href={`/${props.tab}`}>
        <span className='icon '>
          <IconComponent />
        </span>
        <span className='text'>
          <strong>{props.text}</strong>
        </span>
      </Link>
    </button>
  );
}
