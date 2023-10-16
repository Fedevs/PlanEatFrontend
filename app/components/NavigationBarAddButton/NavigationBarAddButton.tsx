"use client";

import { usePathname } from "next/navigation";
import AddIcon from "@/public/icons/add-icon.svg";
import "./NavigationBarAddButton.scss";

export default function NavigationBarAddButton() {
  const pathName = usePathname();

  const addPlannerAction = () => {
    console.log("Add planner");
  };

  const addMealAction = () => {
    console.log("Add meal");
  };

  const addIngredientAction = () => {
    console.log("Add ingredient");
  };

  const addMealTimeAction = () => {
    console.log("Add mealTime");
  };

  const actionMap: { [key: string]: () => void } = {
    "/planners": addPlannerAction,
    "/meals": addMealAction,
    "/ingredients": addIngredientAction,
    "/mealTimes": addMealTimeAction,
  };

  const handleButtonClick = () => {
    const action = actionMap[pathName];
    if (action) {
      action();
    } else {
      throw new Error("No action found, please make sure you registered it");
    }
  };

  return (
    <button
      className='navigation-bar-add-button flex'
      aria-label='Add an item to the list'
      title='Add a new item'
      onClick={handleButtonClick}
    >
      <span className='icon flex mb-4'>
        <AddIcon />
      </span>
    </button>
  );
}
