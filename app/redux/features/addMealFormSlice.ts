import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IngredientInterface } from "@/types/types";

// const mockIngredients: IngredientInterface[] = [
//   {
//     id: 1,
//     name: "Tomato",
//     unit: "pieces",
//     mealIngredient: { mealId: 1, ingredientId: 1, quantity: 2 },
//   },
//   {
//     id: 2,
//     name: "Onion",
//     unit: "pieces",
//     mealIngredient: { mealId: 2, ingredientId: 2, quantity: 1 },
//   },
//   {
//     id: 3,
//     name: "Garlic",
//     unit: "cloves",
//     mealIngredient: { mealId: 3, ingredientId: 3, quantity: 3 },
//   },
//   {
//     id: 4,
//     name: "Spinach",
//     unit: "grams",
//     mealIngredient: { mealId: 4, ingredientId: 4, quantity: 150 },
//   },
//   {
//     id: 5,
//     name: "Mushroom",
//     unit: "grams",
//     mealIngredient: { mealId: 5, ingredientId: 5, quantity: 200 },
//   },
//   {
//     id: 6,
//     name: "Bell pepper",
//     unit: "pieces",
//     mealIngredient: { mealId: 6, ingredientId: 6, quantity: 2 },
//   },
//   {
//     id: 7,
//     name: "Broccoli",
//     unit: "grams",
//     mealIngredient: { mealId: 7, ingredientId: 7, quantity: 250 },
//   },
//   {
//     id: 8,
//     name: "Carrot",
//     unit: "pieces",
//     mealIngredient: { mealId: 8, ingredientId: 8, quantity: 2 },
//   },
//   {
//     id: 9,
//     name: "Cucumber",
//     unit: "pieces",
//     mealIngredient: { mealId: 9, ingredientId: 9, quantity: 1 },
//   },
//   {
//     id: 10,
//     name: "Lettuce",
//     unit: "grams",
//     mealIngredient: { mealId: 10, ingredientId: 10, quantity: 100 },
//   },
//   {
//     id: 11,
//     name: "Potato",
//     unit: "pieces",
//     mealIngredient: { mealId: 11, ingredientId: 11, quantity: 2 },
//   },
//   {
//     id: 12,
//     name: "Zucchini",
//     unit: "pieces",
//     mealIngredient: { mealId: 12, ingredientId: 12, quantity: 1 },
//   },
//   {
//     id: 13,
//     name: "  ",
//     unit: "grams",
//     mealIngredient: { mealId: 13, ingredientId: 13, quantity: 200 },
//   },
//   {
//     id: 14,
//     name: "  ",
//     unit: "grams",
//     mealIngredient: { mealId: 14, ingredientId: 14, quantity: 300 },
//   },
//   {
//     id: 15,
//     name: "Eggplant",
//     unit: "pieces",
//     mealIngredient: { mealId: 15, ingredientId: 15, quantity: 1 },
//   },
//   {
//     id: 16,
//     name: "Green beans",
//     unit: "grams",
//     mealIngredient: { mealId: 16, ingredientId: 16, quantity: 150 },
//   },
//   {
//     id: 17,
//     name: "Kale",
//     unit: "grams",
//     mealIngredient: { mealId: 17, ingredientId: 17, quantity: 100 },
//   },
//   {
//     id: 18,
//     name: "Peas",
//     unit: "grams",
//     mealIngredient: { mealId: 18, ingredientId: 18, quantity: 200 },
//   },
//   {
//     id: 19,
//     name: "Radish",
//     unit: "pieces",
//     mealIngredient: { mealId: 19, ingredientId: 19, quantity: 3 },
//   },
//   {
//     id: 20,
//     name: "Celery",
//     unit: "stalks",
//     mealIngredient: { mealId: 20, ingredientId: 20, quantity: 2 },
//   },
// ];

interface initialState {
  allIngredients: IngredientInterface[];
  selectedIngredients: IngredientInterface[];
  filteredIngredients: IngredientInterface[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
}
const initialState: initialState = {
  allIngredients: [],
  selectedIngredients: [],
  filteredIngredients: [],
  searchTerm: "",
  loading: false,
  error: null,
};

const addMealFormSlice = createSlice({
  name: "addMealFormSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setAllIngredients: (
      state,
      action: PayloadAction<IngredientInterface[]>
    ) => {
      state.allIngredients = action.payload;
    },
    setFilteredIngredients: (
      state,
      action: PayloadAction<IngredientInterface[]>
    ) => {
      state.filteredIngredients = action.payload;
    },
    setSelectedIngredients: (
      state,
      action: PayloadAction<IngredientInterface[]>
    ) => {
      state.selectedIngredients = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setAllIngredients,
  setFilteredIngredients,
  setSelectedIngredients,
} = addMealFormSlice.actions;
export default addMealFormSlice.reducer;
