import styled from "@emotion/styled";
import { theme } from "constants/theme";
import { CardButton, FeaturesList } from "components/VehicleCard/VehicleCard.styled";

const Wrapper = styled.div`
  width: 541px;
  border-radius: 24px;
  background-color: ${theme.colors.primaryWhite};
  padding: ${theme.sizing(20)};
  position: relative;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: ${theme.sizing(8)};
  right: ${theme.sizing(8)};
  display: block;
  background-color: transparent;
  border: none;
`;
const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.textPrimaryBlack};
  stroke: ${theme.colors.textPrimaryBlack};
`;
const ImageThumb = styled.div`
  width: 100%;
  height: 314px;
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 14px;
`;

const VehiclePreview = styled.img`
  object-fit: cover;
`;

const Condition = styled.li`
  display: block;
  background-color: ${theme.colors.conditionBg};
  padding: 7px 14px;
  border-radius: 35px;
`;
const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  margin-bottom: 24px;
`;

const ConditionDescription = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${theme.colors.textPrimarySemiTransparent};
`;

const CategorySubtitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.textPrimaryBlack};
  padding-bottom: ${theme.sizing(4)};
`;
const RentalBtn = styled(CardButton)`
width: 168px;
padding: 12px 50px;
`

const RentalList = styled(FeaturesList)`
margin-bottom: 0;
`
export {
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
};
