import React from "react";
import InfoSpinner from "../../components/InfoSpinner";

export const Authenticating: React.FunctionComponent = () => {
  return <InfoSpinner>Redirecting to CSH SSO</InfoSpinner>;
};

export default Authenticating;
