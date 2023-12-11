import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65706e0809586eff66415ca1.mockapi.io";

const createSearchParams = ({ page, limit }) =>
  new URLSearchParams({ page, limit }).toString();

const getAllCars = createAsyncThunk(
  "cars/getAllCars",
  async (params, thunkAPI) => {
    const p = createSearchParams(params);
    try {
      const res = axios.get(`/advert?${p}`);
      return res;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

const getCarById = createAsyncThunk(
  "cars/getCarById",
  async (carId, thunkAPI) => {
    try {
      const res = await axios.get(`/advert/${carId}`);
      return res;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export { getAllCars, getCarById };
