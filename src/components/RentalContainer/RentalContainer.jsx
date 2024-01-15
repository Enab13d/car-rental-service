import {
  Wrapper,
  CloseBtn,
  CloseIcon,
  ImageThumb,
    VehiclePreview, Condition, ConditionsList, CategorySubtitle, ConditionDescription,
  RentalBtn, RentalList
} from "./RentalContainer.styled";
import sprite from "../../constants/icons/symbol-defs.svg";
import {
  VehicleCardTitle,
  VehicleCardSpan,
  VehicleCardFeatures,
} from "components/VehicleCard/VehicleCard.styled";
import { nanoid } from "nanoid";
const RentalContainer = ({ props }) => {
  const {
    id,
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
    address,
    rentalConditions,
    mileage,
    hideModal,
  } = props;

  return (
    <Wrapper>
      <CloseBtn onClick={hideModal}>
        <CloseIcon>
          <use href={sprite + "#icon-close"}></use>
        </CloseIcon>
      </CloseBtn>
      <ImageThumb>
        <VehiclePreview src={img} alt={description} width={469} height={314} />
      </ImageThumb>
      <VehicleCardTitle>
        {make} <VehicleCardSpan>{model}</VehicleCardSpan>, {year}
      </VehicleCardTitle>
      <RentalList>
        <li key={nanoid()}>
          <VehicleCardFeatures>{address.split(", ").splice(-2).join(" ")}</VehicleCardFeatures>
        </li>
        <li key={nanoid()}>
          <VehicleCardFeatures>Id: {id}</VehicleCardFeatures>
        </li>
        <li key={nanoid()}>
          <VehicleCardFeatures>Year: {year}</VehicleCardFeatures>
        </li>
        <li key={nanoid()}>
          <VehicleCardFeatures>Type: {type}</VehicleCardFeatures>
        </li>
        <li key={nanoid()}>
          <VehicleCardFeatures>
            Fuel Consumption: {fuelConsumption}
          </VehicleCardFeatures>
        </li>
        <li key={nanoid()}>
          <VehicleCardFeatures>Engine size: {engineSize}</VehicleCardFeatures>
        </li>
      </RentalList>
      <ConditionDescription>{description}</ConditionDescription>
      <CategorySubtitle>Accessories and functionalities:</CategorySubtitle>
      {accessories && (
        <RentalList>
          {accessories.map((a) => (
            <li key={nanoid()}>
              <VehicleCardFeatures>{a}</VehicleCardFeatures>
            </li>
          ))}
        </RentalList>
      )}
      {functionalities && (
        <RentalList>
          {functionalities.map((f) => (
            <li key={nanoid()}>
              <VehicleCardFeatures>{f}</VehicleCardFeatures>
            </li>
          ))}
        </RentalList>
      )}
      <CategorySubtitle>Rental Conditions:</CategorySubtitle>
      {rentalConditions && (
        <ConditionsList>
          {rentalConditions.split("\n").map((c) => (
            <Condition key={nanoid()}>
              <ConditionDescription>{c}</ConditionDescription>
            </Condition>
          ))}
          <Condition>
            <ConditionDescription>
              Mileage: <VehicleCardSpan>{mileage}</VehicleCardSpan>
            </ConditionDescription>
          </Condition>
          <Condition>
            <ConditionDescription>
              Price: <VehicleCardSpan>{rentalPrice}</VehicleCardSpan>
            </ConditionDescription>
          </Condition>
        </ConditionsList>
          )}
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
    </Wrapper>
  );
};

export { RentalContainer };
