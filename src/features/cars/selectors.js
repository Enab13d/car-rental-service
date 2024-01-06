
const selectCars = state => state.cars.items;
const selectIsLoading = state => state.cars.isLoading;
const selectError = state => state.cars.error;
const selectCarsLength = state => state.cars.items.length;


export {
    selectCars, selectIsLoading, selectError,selectCarsLength
}