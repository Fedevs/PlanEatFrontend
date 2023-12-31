import { useEffect, useRef, useState, RefObject } from "react";
import Tags from "../Tags/Tags";
import ExpandLessIcon from "@/public/icons/expandLess-icon.svg";
import ExpandMoreIcon from "@/public/icons/expandMore-icon.svg";
import "./Dropdown.scss";

type tag = {
  id: number;
  name: string;
};

interface DropdownProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  id: string;
  selected: tag[];
  deselectElement: (id: number) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

export default function Dropdown(props: DropdownProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputWidth, setInputWidth] = useState<number>(1);
  const dropdownRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

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

  const handleDropdownClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.id === "expand-less") {
      setIsFocused(false);
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWidth((event.target.value.length + 1) * 8);
    props.handleSearchChange(event);
  };

  return (
    <div
      className='dropdown search-input flex justify-between gap-1 w-100 py-1'
      ref={dropdownRef}
      onClick={handleDropdownClick}
    >
      <div
        className={`w-100 flex justify-between tags-input-container ${
          isFocused ? "on-focus" : ""
        }`}
      >
        <div className={`flex justify-start gap-2 p-1 tags-input-wrapper `}>
          {props.selected.map((ingredient) => (
            <Tags
              key={ingredient.id}
              onDelete={() => props.deselectElement(ingredient.id)}
              id={ingredient.id}
              name={ingredient.name}
            />
          ))}

          <input
            type='text'
            ref={inputRef}
            id={props.id}
            className={`search-input p-2`}
            value={props.searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={{ width: inputWidth }}
            onKeyDown={props.onKeyDown}
          />
        </div>
        <div
          className='expand-container flex p-3'
          onClick={() => setIsFocused(!isFocused)}
        >
          {isFocused ? (
            <ExpandLessIcon id='expand-less' />
          ) : (
            <ExpandMoreIcon id='expand-more' />
          )}
        </div>
      </div>

      {isFocused && (
        <div className='dropdown-menu align-start justify-start'>
          {props.children}
        </div>
      )}
    </div>
  );
}
