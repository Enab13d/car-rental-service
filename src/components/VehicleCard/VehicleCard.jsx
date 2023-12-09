import { CardWrapper, VehiclePreview, VehicleCardTitle, VehicleCardSpan, VehicleCardFeatures, FeaturesList, ImageThumb, CardButton } from "./VehicleCard.styled";

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
    mileage} = props;

return (

    <CardWrapper>
        <ImageThumb>
        <VehiclePreview src={img} alt={description} width={274} height={268}/>
        </ImageThumb>
        <VehicleCardTitle>{make} <VehicleCardSpan>{model}</VehicleCardSpan>, {year}</VehicleCardTitle>
        <VehicleCardTitle>{rentalPrice}</VehicleCardTitle>
        <FeaturesList>
            <li><VehicleCardFeatures>{address}</VehicleCardFeatures></li>
            <li><VehicleCardFeatures>{rentalCompany}</VehicleCardFeatures></li>
            <li><VehicleCardFeatures>{type}</VehicleCardFeatures></li>
            <li><VehicleCardFeatures>{make} {model}</VehicleCardFeatures></li>
            <li><VehicleCardFeatures>{id}</VehicleCardFeatures></li>
            <li><VehicleCardFeatures>{accessories[0]}</VehicleCardFeatures></li>
        </FeaturesList>
        <CardButton>Learn more</CardButton>
    </CardWrapper>
)
}

export {
    VehicleCard
}
