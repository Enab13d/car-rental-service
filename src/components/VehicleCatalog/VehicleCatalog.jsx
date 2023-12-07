import { VehicleCard } from "components/VehicleCard";
import { useSelector, useDispatch } from "react-redux";
import { selectCars } from "features/cars/selectors";
import { useEffect } from "react";
import { getAllCars } from "features/cars/operations";



const VehicleCatalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllCars())
    }, [dispatch])
    
    const cars = useSelector(selectCars);


    return (
        <>
            {cars && cars.map(car => <VehicleCard/>)}
        </>
    )
}

export {
    VehicleCatalog
}