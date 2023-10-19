import { useEffect, useRef, useState } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  children: React.ReactNode;
  id: string;
}

export default function Dropdown(props: DropdownProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (
      dropdownRef.current &&
      dropdownRef.current.contains(event.target as Node)
    ) {
      return;
    }
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='dropdown flex w-100' ref={dropdownRef}>
      <input
        type='text'
        id={props.id}
        className={`search-input w-100 p-2 ${isFocused && "focus-input"}`}
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
