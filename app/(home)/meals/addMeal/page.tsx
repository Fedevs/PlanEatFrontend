"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IngredientInterface } from "@/types/types";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import AddIngredientsQuantity from "@/app/components/AddIngredientsQuantity/AddIngredientsQuantity";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  setAllIngredients,
  setError,
  setFilteredIngredients,
  setLoading,
  setMealName,
  setSearchTerm,
  setSelectedIngredients,
} from "@/app/redux/features/addMealFormSlice";
import "./addMeal.scss";
import createMeal from "@/app/hooks/createMeal";
import createMealIngredient from "@/app/hooks/CreateMealIngredient";
import Link from "next/link";
import {
  removeItemFromArray,
  removeItemsFromArray,
} from "@/app/utils/removeItemFromArray";
import addItemToArray from "@/app/utils/addItemToArray";

const mock = [
  { id: 8, name: "Rice", unit: "unidades" },
  { id: 9, name: "Eggs", unit: "unidades" },
  { id: 10, name: "Tomato", unit: "unidades" },
  { id: 11, name: "Onion", unit: "unidades" },
  { id: 12, name: "Lettuce", unit: "hojas" },
  { id: 13, name: "Meat", unit: "kilos" },
  { id: 14, name: "Milk", unit: "litros" },
];

export default function AddMeal() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    allIngredients,
    filteredIngredients,
    selectedIngredients,
    searchTerm,
    mealName,
    error,
    loading,
  } = useAppSelector((state) => state.addMealForm);

  // useEffect(() => {
  //   fetch("/api/ingredients")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       dispatch(setAllIngredients(res));
  //       dispatch(setFilteredIngredients(res));
  //     });
  // }, [dispatch]);

  useEffect(() => {
    dispatch(setAllIngredients(mock));
    dispatch(setFilteredIngredients(mock));
  }, [dispatch]);

  const resetToInitialState = () => {
    dispatch(setMealName(""));
    dispatch(setSearchTerm(""));
    dispatch(setSelectedIngredients([]));
    dispatch(setFilteredIngredients(allIngredients));
    dispatch(setError(null));
    dispatch(setLoading(false));
  };

  /**
   * Handles the change in the search field and filters a list of ingredients based on the search term.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The user input change event.
   */
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    if (typeof event === "string") {
      dispatch(setSearchTerm(event));
    } else {
      let searchValue = event.target.value.toLowerCase();

      const filteredIngredients = allIngredients.filter(
        (ingredient) =>
          ingredient.name.toLowerCase().includes(searchValue) &&
          !selectedIngredients.some((selected) => selected.id === ingredient.id)
      );

      dispatch(setSearchTerm(searchValue));
      dispatch(setFilteredIngredients(filteredIngredients));
    }
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
    const newFilteredIngredients = removeItemsFromArray(
      allIngredients,
      newSelectedIngredients
    );

    // const newFilteredIngredients = removeItemFromArray(
    //   filteredIngredients,
    //   ingredient
    // );

    updateSelectedAndFilteredIngredients(
      newSelectedIngredients,
      newFilteredIngredients
    );

    if (searchTerm) handleSearchChange("");
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
    dispatch(setError(""));
    dispatch(setLoading(true));

    if (!selectedIngredients.length) {
      dispatch(setError("You have to choose at least 1 ingredient"));
      dispatch(setLoading(false));
      return;
    }

    try {
      const meal = await createMeal(mealName);
      if (meal.error?.length && meal.error[0].message) {
        dispatch(setError(meal.error[0].message));
        dispatch(setLoading(false));
        return;
      }

      if (meal.id) {
        selectedIngredients.map(async ({ id, quantity }) => {
          try {
            await createMealIngredient({
              mealId: meal.id,
              ingredientId: id,
              quantity: quantity!,
            });
          } catch (error) {
            dispatch(setLoading(false));
            throw new Error(`Server unavailable, try again later ${error}`);
          }
        });
      }
    } catch (error) {
      dispatch(setLoading(false));
      throw new Error(`Server unavailable, try again later ${error}`);
    }

    dispatch(setLoading(false));
    router.push("/meals");
  };

  const handleCancel = () => {
    resetToInitialState();
  };

  return (
    <div className='add-meal h-100'>
      <h1>Add Meal</h1>
      <form
        onSubmit={handleSubmit}
        className='align-self-start w-100 h-100 flex-column justify-start gap-3'
      >
        <div className='flex w-100 justify-start gap-2 mb-6'>
          <label htmlFor='name'>Name*</label>
          <input
            className='input p-2 my-1'
            id='name'
            type='text'
            required
            value={mealName}
            onChange={(e) => dispatch(setMealName(e.target.value))}
            placeholder='Pasta with...'
          />
        </div>
        <div className='flex-column align-start gap-2 w-100'>
          <label htmlFor='ingredients'>Ingredients*</label>

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
        <div className='quantity-container gap-2 w-100'>
          {selectedIngredients.map((ingredient) => (
            <AddIngredientsQuantity
              key={`quantity-${ingredient.id}`}
              ingredient={ingredient}
              onChange={handleOnQuantityChange}
            />
          ))}
        </div>
        {error ? <p className='error w-100'>{error}</p> : ""}

        <div className='action-buttons flex justify-around mt-3 w-100'>
          <button
            className='cancel-button p-3'
            title='Cancel'
            aria-label='Cancel the creation of the meal'
            onClick={handleCancel}
          >
            <Link href={"/meals"}>Cancel</Link>
          </button>
          <button
            className='confirm-button p-3'
            title='Confirm'
            type='submit'
            aria-label='Create the new meal'
            disabled={loading}
            aria-disabled={loading}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
