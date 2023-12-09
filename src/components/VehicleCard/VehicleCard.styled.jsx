import styled from "@emotion/styled";
import { theme } from "constants/theme";

const CardWrapper = styled.li`
width: 274px;


`
const FeaturesList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
padding-left: 0;
column-gap: 6px;
`
const ImageThumb = styled.div`
width: 274px;
height: 268px;
margin-bottom: 14px;
overflow: hidden;
border-radius: 14px;
`

const VehiclePreview = styled.img`
object-fit: cover;
transition: transform ${theme.animation.duration} ${theme.animation.timingFunction};

&:hover {
    transform: scale(1.1);
}
`
const VehicleCardTitle = styled.h2`
font-size: 16px;
font-weight: 500;
line-height: ${theme.sizing(12)}
color: ${theme.textPrimaryBlack}
`
const VehicleCardSpan = styled.span`
color: ${theme.colors.lightBlue};
`
const VehicleCardFeatures = styled.p`
color: ${theme.colors.textLightGray};
font-size: ${theme.sizing(6)};
line-height: ${theme.sizing(9)};
display: inline-block;
margin-top: 0;
margin-bottom: 0;
`
const CardButton = styled.button`
display: block;
width: 100%;
background-color: ${theme.colors.lightBlue};
padding-top: ${theme.sizing(6)};
padding-bottom: ${theme.sizing(6)};
border: none;
border-radius: 12px;
color: ${theme.colors.primaryWhite};
&:hover, &:focus {
    background-color: ${theme.colors.btnBgHover};
}
`

export {
    CardWrapper, VehiclePreview, VehicleCardTitle, VehicleCardSpan, VehicleCardFeatures, FeaturesList, ImageThumb, CardButton}