import { VehicleCard } from "components/VehicleCard";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, selectIsLoading, selectError } from "features/cars/selectors";
import { useEffect } from "react";
import { getAllCars } from "features/cars/operations";
import { Catalogue } from "./VehicleCatalog.styled";
import { nanoid } from "nanoid";


const VehicleCatalog = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const cars = useSelector(selectCars);
    const error = useSelector(selectError)

    useEffect(() => {
      dispatch(getAllCars())
    }, [dispatch])
    
    


    return (
        <Catalogue>
            {!isLoading && !error && cars.map(car => <VehicleCard key={nanoid()} props={car}/>)}
        </Catalogue>
    )
}

export {
    VehicleCatalog
}