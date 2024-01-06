import { configureStore } from "@reduxjs/toolkit";
import carsSliceReducer from "features/cars/carsSlice";
import favouritesSliceReducer from "features/favourites/favouritesSlice";
import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favouritesPersistConfig = {
    key: 'items',
    storage
}
const favouritesPersistReducer = persistReducer(favouritesPersistConfig, favouritesSliceReducer)

const store = configureStore(
    {
        reducer: {
            cars: carsSliceReducer,
            favourites: favouritesPersistReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        })
    }
)
const persistor = persistStore(store);
export {
    store,
    persistor
}