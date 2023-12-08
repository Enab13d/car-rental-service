import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65706e0809586eff66415ca1.mockapi.io";

const getAllCars = createAsyncThunk("cars/getAllCars", async (_, thunkAPI) => {
  try {
    const res = axios.get("/advert?signature=tU_6PVgI9ANAXx0NWGmx8DGXWvE");
    return res;
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
});

const getCarById = createAsyncThunk(
  "cars/getCarById", async(carId, thunkAPI) => {
   try {
    const res = await axios.get(`/advert/${carId}`);
    return res;
   } catch(err) {
    thunkAPI.rejectWithValue(err.message)
   }
  }
)

export {
    getAllCars,
    getCarById,
}