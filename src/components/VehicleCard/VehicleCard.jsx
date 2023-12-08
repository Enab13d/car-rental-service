import { cld } from "components/App";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryContext } from "cloudinary-react";

const VehicleCard = ({props}) => {
const {id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,} = props;
const image = cld.image(img)
return (

    <li>
        <CloudinaryContext cloudName="ditdqzoio" secure="true">
        <AdvancedImage cldImg={image}/>
        </CloudinaryContext>
        
        <h2>{make}<span>{model}</span>, {year}</h2>
        <p>{rentalPrice}</p>
        
    </li>
)
}

export {
    VehicleCard
}
