import styled from "@emotion/styled";
import { theme } from "constants/theme";

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
  background-color: ${theme.colors.textDarkGray};
  margin-bottom: 150px;
`;
const Footer = styled.footer`
  width: 100%;
  padding-top: ${theme.sizing(8)};
  padding-bottom: ${theme.sizing(8)};
  background-color: ${theme.colors.textDarkGray};
`;

export { Container, Section, Header, Footer };
