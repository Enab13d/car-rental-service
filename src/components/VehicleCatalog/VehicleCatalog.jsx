import { VehicleCard } from "components/VehicleCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectCarsLength,
  selectCars,
} from "features/cars/selectors";

import { Catalogue } from "./VehicleCatalog.styled";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";
import { selectFavourites } from "features/favourites/selectors";
import { useState, useRef, useEffect } from "react";
import { getAllCars } from "features/cars/operations";
import { LoadMoreBtn } from "./VehicleCatalog.styled";

const VehicleCatalog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allCars = useSelector(selectCars);
  const favourites = useSelector(selectFavourites);

  const [page, setPage] = useState(1);
  const total = useSelector(selectCarsLength);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (
      !isInitialized.current &&
      location.pathname === "/catalog" &&
      !total
    ) {
      isInitialized.current = true;
      dispatch(getAllCars(page));
    }
  }, [dispatch, page, location.pathname, total]);

  useEffect(() => {
    if (page !== 1) {
      dispatch(getAllCars(page));
    }
  }, [page, dispatch]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  let cars = location.pathname === "/catalog" ? allCars : favourites;
  const shouldRender = !isLoading && !error && cars.length !==0;


  return (
    <>

      {shouldRender && <Catalogue>
        {cars.map((car) => (
          <VehicleCard key={nanoid()} props={car} />
        ))}
      </Catalogue>}
      {!shouldRender && location.pathname === "/favorites" && <h2>Favourites list is empty yet</h2>}
      {shouldRender && (
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      )}
    </>
  );
};

export { VehicleCatalog };
