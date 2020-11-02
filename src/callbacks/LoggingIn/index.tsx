import React from "react";
import InfoSpinner from "../../components/InfoSpinner";

import { Jumbotron } from "reactstrap";

export const LoggingIn: React.FunctionComponent = () => {
  return (
    <Jumbotron>
      <InfoSpinner>Logging In</InfoSpinner>
    </Jumbotron>
  );
};

export default LoggingIn;
