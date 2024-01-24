import {
  Wrapper,
  CloseBtn,
  CloseIcon,
  ImageThumb,
  VehiclePreview,
  Condition,
  ConditionsList,
  CategorySubtitle,
  ConditionDescription,
  RentalBtn,
  RentalList,
  VehicleDescription,
  AccessoriesList
} from "./RentalContainer.styled";
import sprite from "../../constants/icons/symbol-defs.svg";
import {
  VehicleCardTitle,
  VehicleCardSpan,
  VehicleCardFeatures,
} from "components/VehicleCard/VehicleCard.styled";

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
        <VehiclePreview src={img} alt={description} width={461} height={248} />
      </ImageThumb>
      <VehicleCardTitle>
        {make} <VehicleCardSpan>{model}</VehicleCardSpan>, {year}
      </VehicleCardTitle>
      <RentalList>
        <li key={id + "feature" + address + "city"}>
          <VehicleCardFeatures>
            {address.split(", ").splice(-2, 1).join(" ")}
          </VehicleCardFeatures>
        </li>
        <li key={id + "feature" + address}>
          <VehicleCardFeatures>
            {address.split(", ").splice(-1).join(" ")}
          </VehicleCardFeatures>
        </li>
        <li key={id + "feature" + id}>
          <VehicleCardFeatures>Id: {id}</VehicleCardFeatures>
        </li>
        <li key={id + "feature" + year}>
          <VehicleCardFeatures>Year: {year}</VehicleCardFeatures>
        </li>
        <li key={id + "feature" + type}>
          <VehicleCardFeatures>Type: {type}</VehicleCardFeatures>
        </li>
        <li key={id + "feature" + fuelConsumption}>
          <VehicleCardFeatures>
            Fuel Consumption: {fuelConsumption}
          </VehicleCardFeatures>
        </li>
        <li key={id + "feature" + engineSize}>
          <VehicleCardFeatures>Engine size: {engineSize}</VehicleCardFeatures>
        </li>
      </RentalList>
      <VehicleDescription>{description}</VehicleDescription>
      <CategorySubtitle>Accessories and functionalities:</CategorySubtitle>
      {accessories && (
        <AccessoriesList>
          {accessories.map((a, idx) => (
            <li key={id + "accessories" + idx}>
              <VehicleCardFeatures>{a}</VehicleCardFeatures>
            </li>
          ))}
        </AccessoriesList>
      )}
      {functionalities && (
        <AccessoriesList extended>
          {functionalities.map((f, idx) => (
            <li key={id + "functionalities" + idx}>
              <VehicleCardFeatures>{f}</VehicleCardFeatures>
            </li>
          ))}
        </AccessoriesList>
      )}
      <CategorySubtitle>Rental Conditions:</CategorySubtitle>
      {rentalConditions && (
        <ConditionsList>
          {rentalConditions.split("\n").map((c, idx) => (
            <Condition key={id + "conditions" + idx}>
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
