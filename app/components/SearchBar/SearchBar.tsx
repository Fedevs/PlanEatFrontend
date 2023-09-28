import SearchIcon from "@/public/icons/search-icon.svg";
import "./SearchBar.scss";

interface SearchBarProps {
  // Your props here
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className='search-bar flex py-1 px-2'>
      <SearchIcon className='icon mr-2' />
      <input type='text' className='bar' placeholder='Search...' />
    </div>
  );
}
