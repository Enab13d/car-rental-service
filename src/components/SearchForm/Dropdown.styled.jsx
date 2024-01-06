import styled from "@emotion/styled";
import { theme } from "constants/theme";
const DropDownContainer = styled.div`
  background-color: ${theme.colors.dropDownBg};
  border-radius: 0 0 14px 14px;
  border: 1px solid black;
  padding-left: ${theme.sizing(9)};
  padding-top: ${theme.sizing(7)};
  padding-bottom: ${theme.sizing(7)};
  width: ${theme.sizing(122)};
  position: relative;
`;
const DropDownHeader = styled.div`
width: ${theme.sizing(122)};
background-color: ${theme.colors.inputBg};
`;
const DropDownListContainer = styled.div`
  width: ${theme.sizing(122)};
`;
const DropDownList = styled.ul`
  width: ${theme.sizing(122)};
  & :first-child {
  padding-top: ${theme.sizing(9)};
};
  & :not(:last-child) {
    margin-bottom: ${theme.sizing(4)};
  }
`;
const ListItem = styled.li`
width: ${theme.sizing(122)};
`;

const ExpandDropdownBtn = styled.button`
  position: absolute;
  top: ${theme.sizing(14)};
  right: ${theme.sizing(18)};
  display: block;
  background-color: transparent;
  border: none;
`
const DropdownIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${theme.colors.arrowIcon};
  stroke: ${theme.colors.arrowIcon};
`

export {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem, ExpandDropdownBtn, DropdownIcon
};
