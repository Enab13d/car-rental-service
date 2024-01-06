const selectFavourites = state => state.favourites.items;
const selectFavouritesLength = state => state.favourites.items.length;

export {
    selectFavourites,selectFavouritesLength
}