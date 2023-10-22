"use client";

import React, { useState } from "react";
import { IngredientInterface } from "@/types/types";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import AddIngredientsQuantity from "@/app/components/AddIngredientsQuantity/AddIngredientsQuantity";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import "./addMeal.scss";
import {
  setFilteredIngredients,
  setSearchTerm,
  setSelectedIngredients,
} from "@/app/redux/features/addMealFormSlice";

export default function AddMeal() {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();
  const allIngredients = useAppSelector(
    (state) => state.ingredients.allIngredients
  );
  const filteredIngredients = useAppSelector(
    (state) => state.ingredients.filteredIngredients
  );
  const selectedIngredients = useAppSelector(
    (state) => state.ingredients.selectedIngredients
  );
  const searchTerm = useAppSelector((state) => state.ingredients.searchTerm);

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
    dispatch(setSearchTerm(searchTerm));

    const filteredIngredients = allIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchTerm)
    );

    dispatch(setFilteredIngredients(filteredIngredients));
  };

  const handleIngredientSelect = (ingredient: IngredientInterface) => {
    const updatedSelectedIngredients = [...selectedIngredients, ingredient];
    dispatch(setSelectedIngredients(updatedSelectedIngredients));

    const updatedFilteredIngredients = allIngredients.filter(
      (item) =>
        !updatedSelectedIngredients.some((selected) => selected.id === item.id)
    );
    dispatch(setFilteredIngredients(updatedFilteredIngredients));
    dispatch(setSearchTerm(""));
  };

  const handleIngredientDeselect = (id: number) => {
    const ingredientToDeselect = allIngredients.find(
      (ingredient) => ingredient.id === id
    );
    if (ingredientToDeselect) {
      dispatch(
        setSelectedIngredients(
          selectedIngredients.filter((item) => item !== ingredientToDeselect)
        )
      );
      dispatch(
        setFilteredIngredients([...filteredIngredients, ingredientToDeselect])
      );
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
