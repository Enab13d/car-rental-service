import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65706e0809586eff66415ca1.mockapi.io";

const getFilteredCars = createAsyncThunk(
  "filter/getFilteredCars",
  async (
    { price, make, minMileage, maxMileage },
    thunkAPI
  ) => {
    try {
      let response;
      if (!make) {
        response = await axios.get(`/advert`);
      }
      response = await axios.get(`/advert?make=${make}`);
      let result = response.data;
      if (price) {
        result = result.filter((c) => Number(c.rentalPrice.slice(1)) <= Number(price))
      }
      if (minMileage) {
        result = result.filter((c) => c.mileage.slice(1) >= minMileage)
}
      if (maxMileage) {
        result = result.filter((c) => c.mileage <= maxMileage)
      }

        return result;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);



export { getFilteredCars };

