import styled from "@emotion/styled"

import { CardButton } from "components/VehicleCard/VehicleCard.styled";


const FormWrapper = styled.div`
margin-bottom: ${props => props.theme.sizing(25)};
margin-top: 150px;

`

const Filter = styled.form`
display: flex;
align-items: flex-end;
column-gap: ${props => props.theme.sizing(9)}
`
const FieldWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Field = styled.input`
height: ${props => props.theme.sizing(24)};
padding-top: ${props => props.theme.sizing(7)};
padding-left: ${props => props.theme.sizing(9)};
padding-bottom: ${props => props.theme.sizing(7)};
border: none;
border-right: ${(props) => props.left ? `1px solid ${props => props.theme.colors.inputInnerBorder}`: "none"};
background-color: ${props => props.theme.colors.inputBg};
border-radius: ${(props) => props.left ? "14px 0px 0px 14px" : "0px 14px 14px 0px"};
font-weight: 500;
font-size: 18px;
line-height: 20px;
color: ${props => props.theme.colors.arrowIcon};
`
const SearchBtn = styled(CardButton)`
width: 136px;
height: 48px;
`
const StyledLabel = styled.label`
color: ${props => props.theme.colors.labelGrey};
font-weight: 500;
margin-bottom: 8px;
font-size: 14px;
line-height: 18px;
`

export {
    Filter,
    Field,
    FormWrapper,
    FieldWrapper,
    SearchBtn,
    StyledLabel
}