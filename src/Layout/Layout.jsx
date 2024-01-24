import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme, darkTheme } from "constants/theme";
import { useState } from "react";
import sprite from "../../src/constants/icons/symbol-defs.svg";
import {
  Header,
  Footer,
  Container,
  NavWrapper,
  StyledLink,
  FlexContainer,
  Logo,
  SwitchThemeBtn,
  SetDarkMode,
  SetLightMode,
  CarLogo,
  LogoThumb,
  Section,
} from "./Layout.styled";
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
          <LogoThumb>
                <CarLogo>
                  <use href={sprite + "#icon-car-rental"}></use>
                </CarLogo>
              </LogoThumb>
            <Logo>Car Rental Service</Logo>
            <NavWrapper>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/catalog">Catalogue</StyledLink>
              <StyledLink to="/favorites">Favourites</StyledLink>
            </NavWrapper>
            <SwitchThemeBtn onClick={changeTheme}>
              {isDay ? <SetDarkMode /> : <SetLightMode />}
            </SwitchThemeBtn>
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
        <Container>
          <Section>
            <FlexContainer>
              <h3>Car rental service</h3>
              <p>&copy; 2023 | Developed by Anton Maliutin (Enab13d)</p>
              <LogoThumb>
                <CarLogo>
                  <use href={sprite + "#icon-car-rental"}></use>
                </CarLogo>
              </LogoThumb>
            </FlexContainer>
          </Section>
        </Container>
      </Footer>
    </ThemeProvider>
  );
};

export { SharedLayout };
