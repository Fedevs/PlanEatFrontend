import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IngredientInterface } from "@/types/types";
import getAllIngredientsClient from "@/app/hooks/getAllIngredientsClient";

interface initialState {
  mealName: string;
  allIngredients: IngredientInterface[];
  selectedIngredients: IngredientInterface[];
  filteredIngredients: IngredientInterface[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
}
const initialState: initialState = {
  mealName: "",
  allIngredients: [],
  selectedIngredients: [],
  filteredIngredients: [],
  searchTerm: "",
  loading: false,
  error: null,
};

export const fetchInitialData = createAsyncThunk(
  "addMealFormSlice/fetchInitialData",
  async () => {
    try {
      const response = await getAllIngredientsClient();
      return response;
    } catch (error) {
      throw new Error("failed fetching ingredients");
    }
  }
);

const addMealFormSlice = createSlice({
  name: "addMealFormSlice",
  initialState,
  reducers: {
    setMealName: (state, action: PayloadAction<string>) => {
      state.mealName = action.payload;
    },
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.loading = false;
        state.allIngredients = action.payload;
        state.filteredIngredients = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state) => {
        state.loading = false;
        state.error = "An error ocurred while fetching initial data";
      });
  },
});

export const {
  setMealName,
  setSearchTerm,
  setAllIngredients,
  setFilteredIngredients,
  setSelectedIngredients,
  setLoading,
  setError,
} = addMealFormSlice.actions;
export default addMealFormSlice.reducer;
