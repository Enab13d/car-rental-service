import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65706e0809586eff66415ca1.mockapi.io";

const getFilteredCars = createAsyncThunk(
  "filter/getFilteredCars",
  async (
    { price = 150, make = null, minMileage = null, maxMileage = null },
    thunkAPI
  ) => {
    try {
      const response = await axios.get(`/advert`);

      const result = response.data.filter(
        (c) =>
          c.make.toLowerCase() === make.toLowerCase() &&
          c.rentalPrice <= price &&
          c.mileage >= minMileage &&
          c.mileage <= maxMileage
      );

        return result;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export { getFilteredCars };
