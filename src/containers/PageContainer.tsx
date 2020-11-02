import React from "react";
import { Container } from "reactstrap";
import { NavBar } from "../components/NavBar";

export const PageContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Container className="main" fluid>
      <NavBar />
      <Container>{children}</Container>
    </Container>
  );
};

export default PageContainer;
