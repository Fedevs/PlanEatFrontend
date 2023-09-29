"use client";

import { useState } from "react";
import SearchIcon from "@/public/icons/search-icon.svg";
import "./SearchBar.scss";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleIconClick = () => {
    console.log(searchValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log(searchValue);
    }
  };
  return (
    <div className='search-bar flex py-1 px-2'>
      <button
        className='icon-button flex'
        onClick={handleIconClick}
        aria-label='Search an item'
        title='Search icon'
      >
        <SearchIcon className='icon' />
      </button>
      <input
        type='text'
        className='bar'
        placeholder='Search...'
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleEnterPress}
      />
    </div>
  );
}
