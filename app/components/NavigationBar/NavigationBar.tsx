import NavigationBarButton, {
  NavigationBarButtonProps,
} from "@/app/components/NavigationBarButton/NavigationBarButton";
import NavigationBarAddButton from "@/app/components/NavigationBarAddButton/NavigationBarAddButton";
import "./NavigationBar.scss";

export default function NavigationBar() {
  const plannersButtonOptions: NavigationBarButtonProps = {
    tab: "planners",
    text: "Planners",
  };
  const mealsButtonOptions: NavigationBarButtonProps = {
    tab: "meals",
    text: "Meals",
  };
  const ingredientsButtonOptions: NavigationBarButtonProps = {
    tab: "ingredients",
    text: "Ingredients",
  };
  const mealTimesButtonOptions: NavigationBarButtonProps = {
    tab: "mealTimes",
    text: "Meal times",
  };
  return (
    <footer className='navigation-bar'>
      <nav className='h-100 m-0 p-0'>
        <ul className='flex w-100 h-100 m-0 p-0'>
          <li className='h-100 m-0 p-0'>
            <NavigationBarButton {...plannersButtonOptions} />
          </li>
          <li className='h-100 m-0 p-0'>
            <NavigationBarButton {...mealsButtonOptions} />
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
