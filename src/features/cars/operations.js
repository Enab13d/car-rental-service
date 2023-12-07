import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65706e0809586eff66415ca1.mockapi.io";

const getAllCars = createAsyncThunk("cars/getAllCars", async (_, thunkAPI) => {
  try {
    const res = axios.get("/advert");
    return res;
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
});

export {
    getAllCars,
}