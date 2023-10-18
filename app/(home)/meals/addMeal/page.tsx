"use client";

import { useState } from "react";
import "./addMeal.scss";
import Dropdown from "@/app/components/Dropdown/Dropdown";

type Ingredient = string;

const allIngredients: Ingredient[] = [
  "Orange",
  "Capsicum",
  "Cucumber",
  "Orange",
  "Capsicum",
  "Cucumber",
];

export default function AddMeal() {
  const [name, setName] = useState<string>("");
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: Ingredient = event.target.value;
    if (selectedIngredients.includes(value)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== value)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, value]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredIngredients: Ingredient[] = allIngredients.filter(
    (ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='add-meal'>
      <h1>Add Meal</h1>
      <form onSubmit={() => {}} className='align-self-start w-100'>
        <div className='flex w-100 justify-start gap-2 mb-4'>
          <label htmlFor='name'>Name</label>
          <input
            className='input p-2 my-1'
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Pasta with...'
          />
        </div>
        <div className='flex-column align-start gap-2 w-100'>
          <label htmlFor='ingredients'>Ingredient</label>
          <Dropdown
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
            placeholder='Filter ingredients...'
          >
            {filteredIngredients.map((ingredient, index) => (
              <label key={index} className='dropdown-option'>
                <input
                  type='checkbox'
                  value={ingredient}
                  onChange={handleIngredientChange}
                  checked={selectedIngredients.includes(ingredient)}
                />
                {ingredient}
              </label>
            ))}
          </Dropdown>
        </div>
      </form>
    </div>
  );
}
