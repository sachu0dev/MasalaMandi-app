import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
// unit test
test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load contact us button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load Text", () => {
  render(<Contact />);

  const text = screen.getByText("Contact Us");

  expect(text).toBeInTheDocument();
});

test("Should load placeholder", () => {
  render(<Contact />);

  const text = screen.getByPlaceholderText("name");

  expect(text).toBeInTheDocument();
});

test("Should load 2 input boxes on the contact component", () => {
  render(<Contact />);

  const inputBox = screen.getAllByRole("textbox");

  inputBox.map((input) => {
    expect(input).toBeInTheDocument();
  });

  expect(inputBox.length).toBe(2);
});
