import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import React from "react";

it("render", () => {
  render(<Hello />);
  const myElem = screen.getByText("Hello");
  expect(myElem).toBeInTheDocument();
});
