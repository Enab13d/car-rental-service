import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarById } from "./operations";


const initialState = {
  items: [],
  selectedItems: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.items.push(...action.payload.data);
        state.isLoading = false;
      })
      .addCase(getAllCars.rejected, handleRejected).addCase(
        getCarById.pending, handlePending
      ).addCase(getCarById.fulfilled, (state, action) => {
        state.selectedItem = action.payload;
        state.isLoading = false;
      }).addCase(getCarById.rejected, handleRejected)
  },
});

export default carsSlice.reducer;