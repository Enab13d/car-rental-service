import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectFavourites } from "features/favourites/selectors";
import {
  addToFavourites,
  removeFromFavourites,
} from "features/favourites/actions";

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
  TitleWrapper,
} from "./VehicleCard.styled";
import sprite from "../../constants/icons/symbol-defs.svg";
import { Modal } from "components/Modal";
import { selectCars } from "features/cars/selectors";

const VehicleCard = ({ props }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = props;

  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const cars = useSelector(selectCars)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  const onModalClose = (e) => {
    e.preventDefault();
    if (e.key === "Escape" || e.target.id === "overlay") {
      hideModal();
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    const isPresent = favourites.find((item) => item.id === id);
    if (!isPresent) {
      dispatch(addToFavourites(props));
      return;
    }
    dispatch(removeFromFavourites(props));
  };
  const liked = favourites.find((item) => item.id === id);

  const modalProps = {
    onModalClose,
    expanded: isModalOpen,
    hideModal,
    ...props,
  };

  return (
cars.length && (<>
<CardWrapper>
  <ImageThumb>
    <VehiclePreview
      src={img}
      alt={description}
      width={274}
      height={268}
    />
    <AddToFavouritesBtn onClick={handleClick}>
      <HeartIcon liked={liked}>
        <use href={sprite + "#icon-heart"}></use>
      </HeartIcon>
    </AddToFavouritesBtn>
  </ImageThumb>
        <TitleWrapper>
            <VehicleCardTitle>
    {make} <VehicleCardSpan>{model}</VehicleCardSpan>, {year}
  </VehicleCardTitle>
  <VehicleCardTitle>{rentalPrice}</VehicleCardTitle>
</TitleWrapper>
  <FeaturesList>
    <li>
      <VehicleCardFeatures>{address.split(", ").splice(-2).join(" ")}</VehicleCardFeatures>
    </li>
    <li>
      <VehicleCardFeatures>{rentalCompany}</VehicleCardFeatures>
    </li>
    <li>
      <VehicleCardFeatures>{type}</VehicleCardFeatures>
    </li>
    <li>
      <VehicleCardFeatures>
        {model}
      </VehicleCardFeatures>
    </li>
    <li>
      <VehicleCardFeatures>{id}</VehicleCardFeatures>
    </li>
    <li>
      <VehicleCardFeatures>{accessories && accessories[0].split(" ").slice(0, 3).join(" ")}</VehicleCardFeatures>
    </li>
  </FeaturesList>
  <CardButton onClick={showModal}>Learn more</CardButton>
      </CardWrapper>
      <Modal props={modalProps}></Modal>
</>)
  );
};

export { VehicleCard };
