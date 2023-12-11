import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Container } from "./SharedLayout.styled";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navbar>
          <Container>
            <Navbar.Brand>CAR-RENTAL</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalogue</NavLink>
                <NavLink to="/favorites">Favourites</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
