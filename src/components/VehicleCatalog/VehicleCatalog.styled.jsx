import styled from "@emotion/styled";
import { theme } from "constants/theme";
const Catalogue = styled.ul`
list-style: none;
padding-left: 0;
display: flex;
flex-wrap: wrap;
column-gap: 29px;
row-gap: ${theme.sizing(25)};
`

export {
    Catalogue
}