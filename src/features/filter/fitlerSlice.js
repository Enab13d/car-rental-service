import { createSlice } from "@reduxjs/toolkit";
import { getFilteredCars } from "./operations";

const initialState = {
  filteredCars: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.filteredCars = action.payload.data;
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getFilteredCars.pending, handlePending)
      .addCase(getFilteredCars.fulfilled, handleFulfilled)
      .addCase(getFilteredCars.rejected, handleRejected),
});

export default filterSlice.reducer;