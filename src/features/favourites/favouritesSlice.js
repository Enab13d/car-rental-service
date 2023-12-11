import { createSlice } from "@reduxjs/toolkit";
import { addToFavourites, removeFromFavourites } from "./actions";

const initialState = {
  items: [],
};

const handleAddToFavourites = (state, action) => {
  state.items.push(action.payload.car);
};

const handleRemoveFromFavourites = (state, action) => {
  const idx = state.items.findIndex(
    (vehicle) => vehicle.id === action.payload.car.id
  );
  state.items.splice(idx, 1);
};

const favoritesSlice = createSlice({
  name: "favourites",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(addToFavourites, handleAddToFavourites)
      .addCase(removeFromFavourites, handleRemoveFromFavourites);
  },
});

export default favoritesSlice.reducer;
