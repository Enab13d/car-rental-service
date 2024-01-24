import styled from "@emotion/styled";

import { SlArrowDown } from "react-icons/sl";
const DropDownContainer = styled.div`
  border-radius: 14px;
  border: none;

  width: ${props => props.theme.sizing(122)};
  position: relative;
`;
const DropDownInput = styled.input`
  width: ${props => props.theme.sizing(122)};
  background-color: ${props => props.theme.colors.inputBg};
  height: ${props => props.theme.sizing(24)};
  padding-top: ${props => props.theme.sizing(7)};
  padding-left: ${props => props.theme.sizing(9)};
  padding-bottom: ${props => props.theme.sizing(7)};
  margin-bottom: ${props => props.theme.sizing(2)};
  border-radius: 14px;
  border: none;
  font-weight: 500;
font-size: 18px;
line-height: 20px;
color: ${props => props.theme.colors.arrowIcon};
`;
const DropDownListContainer = styled.div`
  width: ${props => props.theme.sizing(122)};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: ${(props) => (props.expand ? "visible" : "hidden")};

`;
const DropDownList = styled.ul`
  position: absolute;

  padding-left: ${props => props.theme.sizing(9)};
  padding-top: ${props => props.theme.sizing(7)};
  padding-bottom: ${props => props.theme.sizing(7)};
  height: 272px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 14px;
  background-color: ${props => props.theme.colors.dropDownBg};
  width: ${props => props.theme.sizing(122)};
  border: 1px solid ${props => props.theme.colors.dropDownBorder};
  transform: ${(props) =>
    props.expand ? "translateY(50px)" : "translateY(0)"};
  transition: transform ${props => props.theme.animation.duration}
    ${props => props.theme.animation.timingFunction};

  & :first-of-type {
    padding-top: ${props => props.theme.sizing(9)};
  }
  & :not(:last-of-type) {
    margin-bottom: ${props => props.theme.sizing(4)};
  }
`;
const ListItem = styled.li`
  width: ${props => props.theme.sizing(122)};
`;

const ExpandDropdownBtn = styled.button`
  position: absolute;
  top: ${props => props.theme.sizing(7)};
  right: ${props => props.theme.sizing(9)};
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: transform ${props => props.theme.animation.duration}
    ${props => props.theme.animation.timingFunction};
  transform: ${(props) => (props.turnOver ? "rotate(180deg)" : "rotate(0)")};
`;
const DropdownIcon = styled(SlArrowDown)`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.colors.arrowIcon};
  stroke: ${props => props.theme.colors.arrowIcon};
`;

export {
  DropDownContainer,
  DropDownInput,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ExpandDropdownBtn,
  DropdownIcon,
};
