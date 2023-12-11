import { VehicleCard } from "components/VehicleCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCars,
  selectIsLoading,
  selectError,
} from "features/cars/selectors";
import { useEffect, useState } from "react";
import { getAllCars } from "features/cars/operations";
import { Catalogue, LoadMoreBtn, SectionWrapper } from "./VehicleCatalog.styled";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";
import { selectFavourites } from "features/favourites/selectors";


const VehicleCatalog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  let cars = useSelector(selectCars);
  const favourites = useSelector(selectFavourites);
  const error = useSelector(selectError);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;


  useEffect(() => {
    dispatch(getAllCars({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const handleClick = e => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <SectionWrapper>
      <Catalogue>
        {!isLoading &&
          !error &&
          location.pathname === "/catalog" && cars.length &&
          cars.map((car) => <VehicleCard key={nanoid()} props={car} />)}
        {!isLoading &&
          !error &&
          location.pathname !== "/catalog" && favourites.length &&
          favourites.map((car) => <VehicleCard key={nanoid()} props={car} />)}
      </Catalogue>
      {!isLoading && !error && <LoadMoreBtn onClick={handleClick}>Load More</LoadMoreBtn>}
    </SectionWrapper>
  );
};

export { VehicleCatalog };
