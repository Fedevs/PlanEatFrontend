"use client";

import React, { useEffect, useState } from "react";
import { IngredientInterface } from "@/types/types";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import AddIngredientsQuantity from "@/app/components/AddIngredientsQuantity/AddIngredientsQuantity";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  setAllIngredients,
  setFilteredIngredients,
  setSearchTerm,
  setSelectedIngredients,
} from "@/app/redux/features/addMealFormSlice";
import "./addMeal.scss";
import createMeal from "@/app/hooks/createMeal";
import createMealIngredient from "@/app/hooks/CreateMealIngredient";

export default function AddMeal() {
  const [name, setName] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const dispatch = useAppDispatch();
  const allIngredients = useAppSelector(
    (state) => state.addMealForm.allIngredients
  );
  const filteredIngredients = useAppSelector(
    (state) => state.addMealForm.filteredIngredients
  );
  const selectedIngredients = useAppSelector(
    (state) => state.addMealForm.selectedIngredients
  );
  const searchTerm = useAppSelector((state) => state.addMealForm.searchTerm);

  useEffect(() => {
    fetch("/api/ingredients")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAllIngredients(res));
        dispatch(setFilteredIngredients(res));
      });
  }, [dispatch]);

  /**
   * Adds an element to an array and returns the new array.
   * @param {IngredientInterface[]} array - The array to which the element will be added.
   * @param {IngredientInterface} element - The element to be added to the array.
   * @returns {IngredientInterface[]} The new array with the added element.
   */
  const addItemToArray = (
    array: IngredientInterface[],
    element: IngredientInterface
  ) => {
    return [...array, element];
  };

  /**
   * Removes an item from an array and returns the new array.
   * @param {IngredientInterface[]} array - The array from which the item will be removed.
   * @param {IngredientInterface} item - The item to be removed from the array.
   * @returns {IngredientInterface[]} The new array with the item removed.
   */
  const removeItemFromArray = (
    array: IngredientInterface[],
    item: IngredientInterface
  ) => {
    return array.filter((element) => element !== item);
  };

  /**
   * Handles the change in the search field and filters a list of ingredients based on the search term.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The user input change event.
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    dispatch(setSearchTerm(searchTerm));

    const filteredIngredients = allIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchTerm)
    );

    dispatch(setFilteredIngredients(filteredIngredients));
  };

  /**
   * Updates the selected and filtered ingredient lists and dispatches corresponding actions to the Redux store.
   * @param {IngredientInterface[]} selected - The updated array of selected ingredients.
   * @param {IngredientInterface[]} filtered - The updated array of filtered ingredients.
   */
  const updateSelectedAndFilteredIngredients = (
    selected: IngredientInterface[],
    filtered: IngredientInterface[]
  ) => {
    dispatch(setSelectedIngredients(selected));
    dispatch(setFilteredIngredients(filtered));
  };

  /**
   * Handles the selection of an ingredient and updates the selected and filtered ingredient lists accordingly.
   * @param {IngredientInterface} ingredient - The ingredient to be selected.
   */
  const handleIngredientSelect = (ingredient: IngredientInterface) => {
    const newSelectedIngredients = addItemToArray(
      selectedIngredients,
      ingredient
    );

    const newFilteredIngredients = removeItemFromArray(
      filteredIngredients,
      ingredient
    );

    updateSelectedAndFilteredIngredients(
      newSelectedIngredients,
      newFilteredIngredients
    );

    dispatch(setSearchTerm(""));
  };

  /**
   * Handles the deselection of a selected ingredient and updates the selected and filtered ingredient lists accordingly.
   * @param {number} id - The ID of the ingredient to be deselected.
   */
  const handleIngredientDeselect = (id: number) => {
    let ingredient = selectedIngredients.find(
      (ingredient) => ingredient.id === id
    );
    if (ingredient) {
      const newSelectedIngredients = removeItemFromArray(
        selectedIngredients,
        ingredient
      );

      // Extract the quantity from the ingredient to be deselected and keep the rest of the properties
      const { quantity, ...rest } = ingredient;
      ingredient = rest;
      const newFilteredIngredients = addItemToArray(
        filteredIngredients,
        ingredient
      );
      updateSelectedAndFilteredIngredients(
        newSelectedIngredients,
        newFilteredIngredients
      );
    }
  };

  /**
   * Handles the change in quantity for a selected ingredient and updates the corresponding ingredient's quantity.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event corresponding to the change in quantity input.
   * @param {number} id - The ID of the ingredient whose quantity is being changed.
   */
  const handleOnQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const quantity = parseInt(event.target.value);
    const index = selectedIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );

    if (index === -1) {
      return;
    }
    const updatedIngredients = [...selectedIngredients];
    const updatedIngredient = {
      ...selectedIngredients[index],
      quantity: quantity,
    };

    updatedIngredients[index] = updatedIngredient;

    const newSelectedIngredients = updatedIngredients;
    dispatch(setSelectedIngredients(newSelectedIngredients));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!selectedIngredients.length) {
      setSubmitError("You have to choose at least 1 ingredient");
      return;
    }
    const meal = await createMeal(name);
    if (meal.id) {
      selectedIngredients.map(async ({ id, quantity }) => {
        await createMealIngredient({
          mealId: meal.id,
          ingredientId: id,
          quantity: quantity!,
        });
      });
    }
  };

  return (
    <div className='add-meal'>
      <h1>Add Meal</h1>
      <form onSubmit={handleSubmit} className='align-self-start w-100'>
        <div className='flex w-100 justify-start gap-2 mb-6'>
          <label htmlFor='name'>Name</label>
          <input
            className='input p-2 my-1'
            id='name'
            type='text'
            required
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
                <label
                  key={`dropdown-${ingredient.id}`}
                  className='dropdown-option py-1'
                >
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
        <div className='mt-3 quantity-container gap-2'>
          {selectedIngredients.map((ingredient) => (
            <AddIngredientsQuantity
              key={`quantity-${ingredient.id}`}
              ingredient={ingredient}
              onChange={handleOnQuantityChange}
            />
          ))}
        </div>
        {submitError}
        <button type='submit'>Confirm</button>
      </form>
    </div>
  );
}
