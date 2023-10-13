import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MealInterface } from "@/types/types";
import getMealTimes from "@/app/hooks/getMealTimes";

interface initialState {
  data: MealInterface[];
  loading: boolean;
  error: string | null;
}
const initialState: initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchInitialData = createAsyncThunk(
  "mealTimesSlice/fetchInitialData",
  async () => {
    const response = await getMealTimes();
    return response;
  }
);

const mealTimesSlice = createSlice({
  name: "mealTimesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error ocurred while fetching initial data";
        state.data = [];
      });
  },
});

export default mealTimesSlice.reducer;
