import React from "react";
import Spinner from "../Spinner";
import "./infospinner.css";

const InfoSpinner: React.FunctionComponent = ({ children }) => {
  return (
    <div className="spinner-container">
      <Spinner className="info-spinner" />
      <span className="spinner-text">{children}</span>
    </div>
  );
};

export default InfoSpinner;
