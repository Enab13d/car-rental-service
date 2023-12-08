import styled from "@emotion/styled";
import { theme } from "constants/theme";

const Container = styled.div`
margin-left: auto;
margin-right: auto;
padding-left: ${theme.sizing(12)};

`
const Section = styled.section`
margin-left: auto;
margin-right: auto;

`

const Header = styled.header`
width: 100%;
padding-top: ${theme.sizing(8)};
padding-bottom: ${theme.sizing(8)};
background-color: ${theme.colors.textDarkGray}
`
const Footer = styled.footer`
width: 100%;
padding-top: ${theme.sizing(8)};
padding-bottom: ${theme.sizing(8)};
background-color: ${theme.colors.textDarkGray}
`


export {
    Container,
    Section,
    Header,
    Footer,
}