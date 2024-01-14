import styled from "@emotion/styled";
import { theme } from "constants/theme";
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
  padding-top: ${theme.sizing(8)};
  padding-bottom: ${theme.sizing(8)};
  background-color: ${theme.colors.textPrimarySemiTransparent};

`;
const Footer = styled.footer`
  width: 100%;
  padding-top: ${theme.sizing(8)};
  padding-bottom: ${theme.sizing(8)};
  background-color: ${theme.colors.textDarkGray};
`;

const NavWrapper = styled.nav`
display: flex;
column-gap: ${theme.sizing(3)};
`
const StyledLink = styled(NavLink)`
color: ${theme.colors.primaryWhite};
font-size: ${theme.sizing(10)};
text-decoration: none;
font-family: Montserrat;
font-weight: 600;
transition: color ${theme.animation.duration} ${theme.animation.timingFunction};

&:hover,
&:focus {
  color: ${theme.colors.textDarkGray};
}
`
const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.h1`
color: ${theme.colors.primaryWhite};
font-weight: 400;
font-size: ${theme.sizing(18)}


`
export { Container, Section, Header, Footer, NavWrapper, StyledLink, FlexContainer , Logo};
