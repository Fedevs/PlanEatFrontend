"use client";

import React, { useEffect, useState } from "react";
import { IngredientInterface } from "@/types/types";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import "./addMeal.scss";

export default function AddMeal() {
  const [name, setName] = useState<string>("");
  const [allIngredients, setAllIngredients] = useState<IngredientInterface[]>(
    []
  );
  const [filteredIngredients, setFilteredIngredients] = useState<
    IngredientInterface[]
  >([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientInterface[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch("/api/ingredients")
      .then((res) => res.json())
      .then((res) => {
        setAllIngredients(res);
        setFilteredIngredients(res);
      });
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredIngredients = allIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchTerm)
    );

    setFilteredIngredients(filteredIngredients);
  };

  const filterIngredientsList = (ingredient: IngredientInterface) => {
    const filterList = filteredIngredients.filter(
      (item) => item !== ingredient
    );
    setFilteredIngredients(filterList);
  };

  const handleIngredientsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    ingredient: IngredientInterface
  ) => {
    const updatedSelection = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter((item) => item !== ingredient)
      : [...selectedIngredients, ingredient];
    filterIngredientsList(ingredient);
    setSelectedIngredients(updatedSelection);
  };

  return (
    <div className='add-meal'>
      <h1>Add Meal</h1>
      <form onSubmit={() => {}} className='align-self-start w-100'>
        <div className='flex w-100 justify-start gap-2 mb-6'>
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
          <label htmlFor='ingredients'>Ingredients</label>
          <Dropdown
            debug={false}
            handleSearchChange={handleSearchChange}
            id={"ingredients"}
            searchTerm={searchTerm}
            placeholder='Filter ingredients...'
          >
            {filteredIngredients.length ? (
              filteredIngredients.map((ingredient) => (
                <label key={ingredient.id} className='dropdown-option py-1'>
                  <input
                    type='checkbox'
                    style={{ display: "none" }}
                    value={ingredient.name}
                    // checked={selectedIngredients.includes(ingredient)}
                    // checked={alert(ingredient.name)}
                    onChange={(e) => handleIngredientsChange(e, ingredient)}
                  />
                  {ingredient.name}
                </label>
              ))
            ) : (
              <p>
                <b>No ingredients found</b>
              </p>
            )}
          </Dropdown>
        </div>
      </form>
    </div>
  );
}
