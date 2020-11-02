import React from "react";
import { render } from "@testing-library/react";
import Home from "./";

test("renders main app page", () => {
  const { getByText } = render(<Home />);
  const divElement = getByText(/CSH React Boilerplate!/i);
  expect(divElement.textContent).toEqual("Welcome to CSH React Boilerplate!");
});
