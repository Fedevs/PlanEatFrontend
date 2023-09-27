import NavigationBarButton from "@/app/components/NavigationBarButton/NavigationBarButton";
import NavigationBarAddButton from "@/app/components/NavigationBarAddButton/NavigationBarAddButton";
import calendarIcon from "@/public/icons/calendar-icon.svg";
import menuIcon from "@/public/icons/menu-icon.svg";
import orangeIcon from "@/public/icons/orange-icon.svg";
import watchIcon from "@/public/icons/watch-icon.svg";
import "./NavigationBar.scss";

export default function NavigationBar() {
  const plannersButtonOptions = {
    text: "Planners",
    imageOptions: {
      src: calendarIcon,
      alt: "Planners tab",
    },
  };
  const mealsButtonOptions = {
    text: "Meals",
    imageOptions: {
      src: menuIcon,
      alt: "Meals tab",
    },
  };
  const ingredientsButtonOptions = {
    text: "Ingredients",
    imageOptions: {
      src: orangeIcon,
      alt: "Ingredients tab",
    },
  };
  const mealTimesButtonOptions = {
    text: "Meal times",
    imageOptions: {
      src: watchIcon,
      alt: "Meal times tab",
    },
  };
  return (
    <footer className='navigation-bar'>
      <nav className='h-100 m-0 p-0'>
        <ul className='flex w-100 h-100 m-0 p-0'>
          <li className='h-100 m-0 p-0'>
            <NavigationBarButton {...plannersButtonOptions} />
          </li>
          <li className='h-100 m-0 p-0'>
            <NavigationBarButton {...mealTimesButtonOptions} />
          </li>
          <li className='h-100 m-0 p-0'>
            <NavigationBarAddButton />
          </li>
          <li className='h-100 m-0 p-0'>
            <NavigationBarButton {...ingredientsButtonOptions} />
          </li>
          <li className='h-100 m-0 p-0'>
            <NavigationBarButton {...mealTimesButtonOptions} />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
