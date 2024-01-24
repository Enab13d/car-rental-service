import styled from "@emotion/styled";

import { CardButton } from "components/VehicleCard/VehicleCard.styled";

const Catalogue = styled.ul`
list-style: none;
padding-left: 0;
display: flex;
flex-wrap: wrap;
column-gap: 29px;
row-gap: ${props => props.theme.sizing(25)};
margin-bottom: ${props => props.theme.sizing(50)};
`
const LoadMoreBtn = styled(CardButton)`
width: 120px;
height: 50px;
margin-bottom: ${props => props.theme.sizing(20)};
`
const SectionWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export {
    Catalogue,
    LoadMoreBtn,
    SectionWrapper
}