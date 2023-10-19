import { useEffect, useRef, useState } from "react";
import "./Dropdown.scss";
import Tags from "../Tags/Tags";

type tag = {
  id: number;
  name: string;
};

interface DropdownProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  children: React.ReactNode;
  id: string;
  selected: tag[];
  deselectElement: (id: number) => void;
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
    <div
      className={`dropdown search-input flex justify-start w-100 py-1 ${
        isFocused && "focus-dropdown"
      }`}
      ref={dropdownRef}
    >
      {props.selected.map((ingredient) => (
        <Tags
          key={ingredient.id}
          onDelete={() => props.deselectElement(ingredient.id)}
          id={ingredient.id}
          name={ingredient.name}
        />
      ))}
      <div>
        <input
          type='text'
          id={props.id}
          className={`search-input p-2 `}
          placeholder={props.placeholder}
          value={props.searchTerm}
          onChange={props.handleSearchChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      <div
        className={`dropdown-menu mt-5 align-start justify-start ${
          isFocused ? "show-dropdown-menu" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
