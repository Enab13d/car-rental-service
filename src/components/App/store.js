import { configureStore } from "@reduxjs/toolkit";
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