import React from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import {NavLink} from "react-router-dom";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";

const NavBar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="primary" dark expand="lg">
        <Container>
          <NavLink to="/" className={"navbar-brand"}>
            CSH React Boilerplate
          </NavLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              {
                // to add stuff to the navbar, add a NavItem tag with a NavLink to the route
              }
            </Nav>
            <Nav navbar className="ml-auto">
              <Profile />
              <NavItem className="nav-link">
                <ThemeToggle />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
