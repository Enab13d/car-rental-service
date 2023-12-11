import { createAction } from "@reduxjs/toolkit";

const addToFavourites = createAction(
  "favourites/addToFavourites",
  function prepare(car) {
    return {
      payload: {
        car,
      },
    };
  }
);

const removeFromFavourites = createAction(
  "favourites/removeFromFavourites",
  function prepare(car) {
    return {
      payload: {
        car,
      },
    };
  }
);

export { addToFavourites, removeFromFavourites };
