import styled from "@emotion/styled";
import { FeaturesList } from "components/VehicleCard/VehicleCard.styled";

const Wrapper = styled.div`
  width: 541px;
  border-radius: 24px;
  background-color: ${props => props.theme.colors.primaryWhite};
  padding: ${props => props.theme.sizing(20)};
  position: relative;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: ${props => props.theme.sizing(8)};
  right: ${props => props.theme.sizing(8)};
  display: block;
  background-color: transparent;
  border: none;
    cursor: pointer;
`;
const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.colors.textPrimaryBlack};
  stroke: ${props => props.theme.colors.textPrimaryBlack};
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
  background-color: ${props => props.theme.colors.conditionBg};
  padding: 7px 14px;
  border-radius: 35px;
`;
const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const ConditionDescription = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.textPrimarySemiTransparent};
`;

const CategorySubtitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.textPrimaryBlack};
  padding-bottom: ${props => props.theme.sizing(4)};
`;

const RentalBtn = styled.a`
display: block;
text-decoration: none;
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
