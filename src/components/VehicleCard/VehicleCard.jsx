import {
  CardWrapper,
  VehiclePreview,
  VehicleCardTitle,
  VehicleCardSpan,
  VehicleCardFeatures,
  FeaturesList,
  ImageThumb,
  CardButton,
  AddToFavouritesBtn,
  HeartIcon,
} from "./VehicleCard.styled";
import { useState } from "react";
import sprite from "../../constants/icons/symbol-defs.svg";
import { Modal } from "components/Modal";

const VehicleCard = ({ props }) => {
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
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  const onModalClose = (e) => {
    e.preventDefault();
    if (e.key === "Escape") {
      hideModal();
    }
  };
    const modalProps = {
        onModalClose, expanded: isModalOpen, hideModal,
        ...props
  }

  return (
    <>
      <CardWrapper>
        <ImageThumb>
          <VehiclePreview
            src={img}
            alt={description}
            width={274}
            height={268}
          />
          <AddToFavouritesBtn>
            <HeartIcon>
              <use href={sprite + "#icon-heart"}></use>
            </HeartIcon>
          </AddToFavouritesBtn>
        </ImageThumb>
        <VehicleCardTitle>
          {make} <VehicleCardSpan>{model}</VehicleCardSpan>, {year}
        </VehicleCardTitle>
        <VehicleCardTitle>{rentalPrice}</VehicleCardTitle>
        <FeaturesList>
          <li>
            <VehicleCardFeatures>{address}</VehicleCardFeatures>
          </li>
          <li>
            <VehicleCardFeatures>{rentalCompany}</VehicleCardFeatures>
          </li>
          <li>
            <VehicleCardFeatures>{type}</VehicleCardFeatures>
          </li>
          <li>
            <VehicleCardFeatures>
              {make} {model}
            </VehicleCardFeatures>
          </li>
          <li>
            <VehicleCardFeatures>{id}</VehicleCardFeatures>
          </li>
          <li>
            <VehicleCardFeatures>{accessories[0]}</VehicleCardFeatures>
          </li>
        </FeaturesList>
        <CardButton onClick={showModal}>Learn more</CardButton>
      </CardWrapper>
          <Modal props={ modalProps}></Modal>
    </>
  );
};

export { VehicleCard };
