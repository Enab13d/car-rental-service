import styled from "@emotion/styled"
import { theme } from "constants/theme"
import { CardButton } from "components/VehicleCard/VehicleCard.styled";


const FormWrapper = styled.div`
margin-bottom: ${theme.sizing(25)};
margin-top: 150px;

`

const Filter = styled.form`
display: flex;
align-items: flex-end;
column-gap: ${theme.sizing(9)}
`
const FieldWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Field = styled.input`
height: ${theme.sizing(24)};
padding-top: ${theme.sizing(7)};
padding-left: ${theme.sizing(9)};
padding-bottom: ${theme.sizing(7)};
border: none;
border-right: ${(props) => props.left ? `1px solid ${theme.colors.inputInnerBorder}`: "none"};
background-color: ${theme.colors.inputBg};
border-radius: ${(props) => props.left ? "14px 0px 0px 14px" : "0px 14px 14px 0px"};
font-weight: 500;
font-size: 18px;
line-height: 20px;
color: ${theme.colors.arrowIcon};
`
const SearchBtn = styled(CardButton)`
width: 136px;
height: 48px;
`
const StyledLabel = styled.label`
color: ${theme.colors.labelGrey};
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