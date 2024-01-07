import styled from "@emotion/styled";
import { theme } from "constants/theme";
import { SlArrowDown } from "react-icons/sl";
const DropDownContainer = styled.div`
  border-radius: 14px;
  border: none;

  width: ${theme.sizing(122)};
  position: relative;
`;
const DropDownInput = styled.input`
  width: ${theme.sizing(122)};
  background-color: ${theme.colors.inputBg};
  height: ${theme.sizing(24)};
  padding-top: ${theme.sizing(7)};
  padding-left: ${theme.sizing(9)};
  padding-bottom: ${theme.sizing(7)};
  margin-bottom: ${theme.sizing(2)};
  border-radius: 14px;
  border: none;
`;
const DropDownListContainer = styled.div`
  width: ${theme.sizing(122)};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: ${(props) => (props.expand ? "visible" : "hidden")};
`;
const DropDownList = styled.ul`
  position: absolute;

  padding-left: ${theme.sizing(9)};
  padding-top: ${theme.sizing(7)};
  padding-bottom: ${theme.sizing(7)};
  height: 272px;
  overflow-y: scroll;

  border-radius: 14px;
  background-color: ${theme.colors.dropDownBg};
  width: ${theme.sizing(122)};
  border: 1px solid ${theme.colors.dropDownBorder};
  transform: ${(props) =>
    props.expand ? "translateY(50px)" : "translateY(0)"};
  transition: transform ${theme.animation.duration}
    ${theme.animation.timingFunction};

  & :first-child {
    padding-top: ${theme.sizing(9)};
  }
  & :not(:last-child) {
    margin-bottom: ${theme.sizing(4)};
  }
`;
const ListItem = styled.li`
  width: ${theme.sizing(122)};
`;

const ExpandDropdownBtn = styled.button`
  position: absolute;
  top: ${theme.sizing(7)};
  right: ${theme.sizing(9)};
  width: 20px;
  height: 20px;

  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: transform ${theme.animation.duration}
    ${theme.animation.timingFunction};
  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0)")};
`;
const DropdownIcon = styled(SlArrowDown)`
  width: 20px;
  height: 20px;
  fill: ${theme.colors.arrowIcon};
  stroke: ${theme.colors.arrowIcon};
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
