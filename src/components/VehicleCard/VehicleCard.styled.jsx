import styled from "@emotion/styled";


const CardWrapper = styled.li`
  width: 274px;
  height: 426px;
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
  transition: transform ${props => props.theme.animation.duration}
    ${props => props.theme.animation.timingFunction};

  &:hover {
    transform: scale(1.1);
  }
`;
const VehicleCardTitle = styled.h2`
font-size: 16px;
font-weight: 500;
line-height: ${props => props.theme.sizing(12)};
color: ${props => props.theme.textPrimaryBlack};

`;
const VehicleCardSpan = styled.span`
  color: ${props => props.theme.colors.priceSpan};
`;
const VehicleCardFeatures = styled.p`
  color: ${props => props.theme.colors.textPrimarySemiTransparent};
  font-size: ${props => props.theme.sizing(6)};
  line-height: ${props => props.theme.sizing(9)};
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
`;
const CardButton = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.lightBlue};
  padding-top: ${props => props.theme.sizing(6)};
  padding-bottom: ${props => props.theme.sizing(6)};
  border: none;
  border-radius: 12px;
  color: ${props => props.theme.colors.persistentWhite};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  transition: background-color ${props => props.theme.animation.duration}
    ${props => props.theme.animation.timingFunction};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnBgHover};
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
  cursor: pointer;
`;

const HeartIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${(props) => (props.liked ? props.theme.colors.btnBgHover : "none")};
  stroke: ${(props) =>
    props.liked ? props.theme.colors.btnBgHover : props => props.theme.colors.persistentWhite};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.btnBgHover};
    stroke: ${props => props.theme.colors.btnBgHover};
  }
`;
const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
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
  HeartIcon,
  TitleWrapper
};
