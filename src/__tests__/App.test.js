import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../App";

jest.mock("components/Recipes", () => () => "MockRecipes");

describe("App", () => {
  it("renders the component correctly", () => {
    render(<App />);

    expect(screen.getByText("MockRecipes")).toBeVisible();
  });
});
