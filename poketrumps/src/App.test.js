import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const linkElement = screen.getByText(/PokeTrumps/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders input field", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter Pokemon Name/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders fetch button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Fetch Pokemon/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders random button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Random Pokemon/i);
  expect(buttonElement).toBeInTheDocument();
});
