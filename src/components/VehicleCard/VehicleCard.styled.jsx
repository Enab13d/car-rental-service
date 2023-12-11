import styled from "@emotion/styled";
import { theme } from "constants/theme";


const CardWrapper = styled.li`
  width: 274px;
`;
const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  column-gap: 6px;
  margin-bottom: 28px;
`;
const ImageThumb = styled.div`
  width: 274px;
  height: 268px;
  position: relative;
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 14px;
`;

const VehiclePreview = styled.img`
  object-fit: cover;
  transition: transform ${theme.animation.duration}
    ${theme.animation.timingFunction};

  &:hover {
    transform: scale(1.1);
  }
`;
const VehicleCardTitle = styled.h2`
font-size: 16px;
font-weight: 500;
line-height: ${theme.sizing(12)}
color: ${theme.textPrimaryBlack}
`;
const VehicleCardSpan = styled.span`
  color: ${theme.colors.lightBlue};
`;
const VehicleCardFeatures = styled.p`
  color: ${theme.colors.textPrimarySemiTransparent};
  font-size: ${theme.sizing(6)};
  line-height: ${theme.sizing(9)};
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
`;
const CardButton = styled.button`
  display: block;
  width: 100%;
  background-color: ${theme.colors.lightBlue};
  padding-top: ${theme.sizing(6)};
  padding-bottom: ${theme.sizing(6)};
  border: none;
  border-radius: 12px;
  color: ${theme.colors.primaryWhite};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  transition: background-color ${theme.animation.duration}
    ${theme.animation.timingFunction};
  &:hover,
  &:focus {
    background-color: ${theme.colors.btnBgHover};
  }
`;
const AddToFavouritesBtn = styled.button`
position: absolute;
top: 14px;
right: 14px;
  display: block;
  color: white;
  background-color: transparent;
  border: none;
`;

const HeartIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${(props) => (props.liked ? theme.colors.btnBgHover : 'none')};
  stroke: ${(props) => (props.liked ? theme.colors.btnBgHover : theme.colors.primaryWhite)};

  &:hover,
  &:focus {
    fill: ${theme.colors.btnBgHover};
    stroke: ${theme.colors.btnBgHover};
  }

`

export {
  CardWrapper,
  VehiclePreview,
  VehicleCardTitle,
  VehicleCardSpan,
  VehicleCardFeatures,
  FeaturesList,
  ImageThumb,
    CardButton,
    AddToFavouritesBtn,
  HeartIcon
};
