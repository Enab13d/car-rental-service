import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme, darkTheme } from "constants/theme";
import { useState } from "react";
import {
  Header,
  Footer,
  Container,
  NavWrapper,
  StyledLink,
  FlexContainer,
  Logo, SwitchThemeBtn, SwitchIcon
} from "./SharedLayout.styled";
import { Global } from "@emotion/react";


const SharedLayout = () => {
  const [isDay, setIsDay] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const changeTheme = (e) => {
    e.preventDefault();
    if (!isDay) {
      setIsDay(true);
      setCurrentTheme(theme);
      return;
    }
    setIsDay(false);
    setCurrentTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Global
        styles={{
          body: {
            backgroundColor: `${currentTheme.colors.primaryWhite}`,
            color: `${currentTheme.colors.textPrimaryBlack}`,
          },
        }}
      />
      <Header>
        <Container>
          <FlexContainer>
            <Logo>Car Rental Service</Logo>
            <NavWrapper>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/catalog">Catalogue</StyledLink>
              <StyledLink to="/favorites">Favourites</StyledLink>
            </NavWrapper>
            <SwitchThemeBtn onClick={changeTheme}><SwitchIcon fill={ isDay ? "black" : "white"}/></SwitchThemeBtn>
          </FlexContainer>
        </Container>
      </Header>
      <Container>
        <main>
          <Suspense fallback="loading...">
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <Footer>
        <Container>FOOTER</Container>
      </Footer>
    </ThemeProvider>
  );
};

export { SharedLayout };
