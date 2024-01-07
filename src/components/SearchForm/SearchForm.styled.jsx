import styled from "@emotion/styled"
import { theme } from "constants/theme"


const FormWrapper = styled.div`
margin-bottom: ${theme.sizing(25)};
`

const Filter = styled.form`
display: flex;
column-gap: ${theme.sizing(9)}
`
const Select = styled.select`

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
`

export {
    Filter,
    Field,
    Select,
    FormWrapper,
    FieldWrapper
}