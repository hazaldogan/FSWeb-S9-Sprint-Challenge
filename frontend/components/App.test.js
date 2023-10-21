import React from "react";
import AppFunctional from "./AppFunctional";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Write your tests here
test("sanity", () => {
  expect(true).toBe(true);
});

test("renders without crashing", () => {
  render(<AppFunctional />);
});

test("test initial state", () => {
  render(<AppFunctional />);
  const headings = screen.getAllByRole("heading", { level: 3 });
  expect(headings).toHaveLength(3);
  expect(headings[0]).toHaveTextContent("Koordinatlar (2,2)");
  expect(headings[1]).toHaveTextContent("0 kere ilerlediniz");
  expect(headings[2]).toHaveTextContent("");
});

test("test 5 buttons render", () => {
  render(<AppFunctional />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(6);
});
