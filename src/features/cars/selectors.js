
const selectCars = state => state.cars.items;
const selectIsLoading = state => state.cars.isLoading;
const selectError = state => state.cars.error;


export {
    selectCars, selectIsLoading, selectError,
}