import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./operations";


const initialState = {
  items: [],
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
        state.isLoading = false;
        state.items.push(...action.payload.data);
        state.error = null;
      })
      .addCase(getAllCars.rejected, handleRejected)
  },
});

export default carsSlice.reducer;