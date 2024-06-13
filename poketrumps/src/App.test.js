import {MemoryRouter} from 'react-router-dom'
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
    <MemoryRouter>
      <App />
    </MemoryRouter>
});

test("renders header", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/PokeTrumps/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders input field", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const inputElement = screen.getByPlaceholderText(/Enter Pokemon Name/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders fetch button", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const buttonElement = screen.getByText(/Fetch Pokemon/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders random button", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const buttonElement = screen.getByText(/Random Pokemon/i);
  expect(buttonElement).toBeInTheDocument();
});
