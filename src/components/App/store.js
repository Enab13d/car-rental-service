import { configureStore } from "@reduxjs/toolkit";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import carsSliceReducer from "features/cars/carsSlice";

const store = configureStore(
    {
        reducer: {
            cars: carsSliceReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        })
    }
)

export {
    store,
}