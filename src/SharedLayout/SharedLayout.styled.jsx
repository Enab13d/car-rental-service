import styled from "@emotion/styled";
import { RentalBtn } from "components/RentalContainer/RentalContainer.styled";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: 128px;
  padding-right: 128px;

`;

const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.header`
  width: 100%;
  padding-top: ${props => props.theme.sizing(8)};
  padding-bottom: ${props => props.theme.sizing(8)};
  background-color: ${props => props.theme.colors.header};

`;
const Footer = styled.footer`
  width: 100%;
  padding-top: ${props => props.theme.sizing(8)};
  padding-bottom: ${props => props.theme.sizing(8)};
  background-color: ${props => props.theme.colors.header};
`;

const NavWrapper = styled.nav`
display: flex;
column-gap: ${props => props.theme.sizing(3)};
`
const StyledLink = styled(NavLink)`
color: ${props => props.theme.colors.navText};
font-size: ${props => props.theme.sizing(10)};
text-decoration: none;
font-family: Montserrat;
font-weight: 600;
transition: color ${props => props.theme.animation.duration} ${props => props.theme.animation.timingFunction};

&:hover,
&:focus {
  color: ${props => props.theme.colors.navLinkHover};
}
`
const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.h1`
color: ${props => props.theme.colors.navText};
font-weight: 400;
font-size: ${props => props.theme.sizing(18)}
`

const SwitchThemeBtn = styled(RentalBtn)`
background-color: ${props => props.theme.colors.primaryWhite};
color: black;
width: 40px;
padding: 0;

display: flex;
jusify-content: center;
allign-items: center;
`
const SwitchIcon = styled(MdDarkMode)`
width: 30px;
height: 30px;
`
export { Container, Section, Header, Footer, NavWrapper, StyledLink, FlexContainer , Logo, SwitchThemeBtn, SwitchIcon};
