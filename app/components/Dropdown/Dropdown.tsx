import { useState } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  children: React.ReactNode;
}

export default function Dropdown(props: DropdownProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className='dropdown flex w-100'>
      <input
        type='text'
        className='search-input w-100 p-2'
        placeholder={props.placeholder}
        value={props.searchTerm}
        onChange={props.handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <div
        className={`dropdown-menu align-start justify-start ${
          isFocused ? "show-dropdown-menu" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
