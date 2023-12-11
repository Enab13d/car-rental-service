import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Header,
  Footer,
  Container,
  NavWrapper,
  StyledLink,
  FlexContainer,
  Logo,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <FlexContainer>
             <Logo>Car Rental Service</Logo>
          <NavWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/catalog">Catalogue</StyledLink>
            <StyledLink to="/favorites">Favourites</StyledLink>
          </NavWrapper>
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
    </>
  );
};

export { SharedLayout };
