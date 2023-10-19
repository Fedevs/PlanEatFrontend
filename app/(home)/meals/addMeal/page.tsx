"use client";

import React, { useEffect, useState } from "react";
import { IngredientInterface } from "@/types/types";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import "./addMeal.scss";

const test: IngredientInterface[] = [
  {
    id: 1,
    name: "Tomato",
    unit: "pieces",
    mealIngredient: { mealId: 1, ingredientId: 1, quantity: 2 },
  },
  {
    id: 2,
    name: "Onion",
    unit: "pieces",
    mealIngredient: { mealId: 2, ingredientId: 2, quantity: 1 },
  },
  {
    id: 3,
    name: "Garlic",
    unit: "cloves",
    mealIngredient: { mealId: 3, ingredientId: 3, quantity: 3 },
  },
  {
    id: 4,
    name: "Spinach",
    unit: "grams",
    mealIngredient: { mealId: 4, ingredientId: 4, quantity: 150 },
  },
  {
    id: 5,
    name: "Mushroom",
    unit: "grams",
    mealIngredient: { mealId: 5, ingredientId: 5, quantity: 200 },
  },
  {
    id: 6,
    name: "Bell pepper",
    unit: "pieces",
    mealIngredient: { mealId: 6, ingredientId: 6, quantity: 2 },
  },
  {
    id: 7,
    name: "Broccoli",
    unit: "grams",
    mealIngredient: { mealId: 7, ingredientId: 7, quantity: 250 },
  },
  {
    id: 8,
    name: "Carrot",
    unit: "pieces",
    mealIngredient: { mealId: 8, ingredientId: 8, quantity: 2 },
  },
  {
    id: 9,
    name: "Cucumber",
    unit: "pieces",
    mealIngredient: { mealId: 9, ingredientId: 9, quantity: 1 },
  },
  {
    id: 10,
    name: "Lettuce",
    unit: "grams",
    mealIngredient: { mealId: 10, ingredientId: 10, quantity: 100 },
  },
  {
    id: 11,
    name: "Potato",
    unit: "pieces",
    mealIngredient: { mealId: 11, ingredientId: 11, quantity: 2 },
  },
  {
    id: 12,
    name: "Zucchini",
    unit: "pieces",
    mealIngredient: { mealId: 12, ingredientId: 12, quantity: 1 },
  },
  {
    id: 13,
    name: "Cauliflower",
    unit: "grams",
    mealIngredient: { mealId: 13, ingredientId: 13, quantity: 200 },
  },
  {
    id: 14,
    name: "Cabbage",
    unit: "grams",
    mealIngredient: { mealId: 14, ingredientId: 14, quantity: 300 },
  },
  {
    id: 15,
    name: "Eggplant",
    unit: "pieces",
    mealIngredient: { mealId: 15, ingredientId: 15, quantity: 1 },
  },
  {
    id: 16,
    name: "Green beans",
    unit: "grams",
    mealIngredient: { mealId: 16, ingredientId: 16, quantity: 150 },
  },
  {
    id: 17,
    name: "Kale",
    unit: "grams",
    mealIngredient: { mealId: 17, ingredientId: 17, quantity: 100 },
  },
  {
    id: 18,
    name: "Peas",
    unit: "grams",
    mealIngredient: { mealId: 18, ingredientId: 18, quantity: 200 },
  },
  {
    id: 19,
    name: "Radish",
    unit: "pieces",
    mealIngredient: { mealId: 19, ingredientId: 19, quantity: 3 },
  },
  {
    id: 20,
    name: "Celery",
    unit: "stalks",
    mealIngredient: { mealId: 20, ingredientId: 20, quantity: 2 },
  },
];

export default function AddMeal() {
  const [name, setName] = useState<string>("");
  const [allIngredients, setAllIngredients] =
    useState<IngredientInterface[]>(test);
  const [filteredIngredients, setFilteredIngredients] =
    useState<IngredientInterface[]>(test);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientInterface[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // useEffect(() => {
  //   fetch("/api/ingredients")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setAllIngredients(res);
  //       setFilteredIngredients(res);
  //     });
  // }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredIngredients = allIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchTerm)
    );

    setFilteredIngredients(filteredIngredients);
  };

  const handleIngredientSelect = (ingredient: IngredientInterface) => {
    const updatedSelectedIngredients = [...selectedIngredients, ingredient];
    setSelectedIngredients(updatedSelectedIngredients);

    const updatedFilteredIngredients = allIngredients.filter(
      (item) =>
        !updatedSelectedIngredients.some((selected) => selected.id === item.id)
    );
    setFilteredIngredients(updatedFilteredIngredients);
    setSearchTerm("");
  };

  const handleIngredientDeselect = (id: number) => {
    const ingredientToDeselect = allIngredients.find(
      (ingredient) => ingredient.id === id
    );
    if (ingredientToDeselect) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredientToDeselect)
      );
      setFilteredIngredients([...filteredIngredients, ingredientToDeselect]);
    }
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
            handleSearchChange={handleSearchChange}
            id={"ingredients"}
            searchTerm={searchTerm}
            selected={selectedIngredients}
            deselectElement={handleIngredientDeselect}
          >
            {filteredIngredients.length ? (
              filteredIngredients.map((ingredient) => (
                <label key={ingredient.id} className='dropdown-option py-1'>
                  <input
                    type='checkbox'
                    style={{ display: "none" }}
                    value={ingredient.name}
                    onChange={() => handleIngredientSelect(ingredient)}
                  />
                  {ingredient.name}
                </label>
              ))
            ) : (
              <p className='flex'>
                <b>No ingredients found</b>
              </p>
            )}
          </Dropdown>
        </div>
      </form>
    </div>
  );
}
