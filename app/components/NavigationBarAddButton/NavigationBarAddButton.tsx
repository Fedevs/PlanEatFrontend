"use client";

import { join } from "path";
import { usePathname } from "next/navigation";
import AddIcon from "@/public/icons/add-icon.svg";
import Link from "next/link";
import "./NavigationBarAddButton.scss";

export default function NavigationBarAddButton() {
  const pathName = usePathname();

  const linkMap: {
    [key: string]: string;
  } = {
    "/planners": join(pathName, "addPlanner"),
    "/meals": join(pathName, "addMeal"),
    "/ingredients": join(pathName, "addIngredient"),
    "/mealTimes": join(pathName, "addMealTime"),
  };
  const isDisabled: boolean = !linkMap[pathName];

  return (
    <button
      className='navigation-bar-add-button flex'
      aria-label='Add an item to the list'
      title='Add a new item'
      onClick={() => {}}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      <Link href={`${linkMap[pathName]}`} className='flex w-100 h-100'>
        <span className='icon flex mb-4'>
          <AddIcon />
        </span>
      </Link>
    </button>
  );
}
