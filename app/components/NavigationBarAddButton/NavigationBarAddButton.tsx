import AddIcon from "@/public/icons/add-icon.svg";
import "./NavigationBarAddButton.scss";

interface NavigationBarAddButtonProps {
  // Your props here
}

export default function NavigationBarAddButton(
  props: NavigationBarAddButtonProps
) {
  return (
    <button className='navigation-bar-add-button flex'>
      <span className='icon flex mb-4'>
        <AddIcon />
      </span>
    </button>
  );
}
