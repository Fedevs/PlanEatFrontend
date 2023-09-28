import AddIcon from "@/public/icons/add-icon.svg";
import "./NavigationBarAddButton.scss";

export default function NavigationBarAddButton() {
  return (
    <button
      className='navigation-bar-add-button flex'
      aria-label='Add an item to the list'
      title='Add a new item'
    >
      <span className='icon flex mb-4'>
        <AddIcon />
      </span>
    </button>
  );
}
