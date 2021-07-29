import React from "react";
import { render, screen } from "@testing-library/react";

import useRecipes from "hooks/api/useRecipes";

import Recipes from "../Recipes";
import { MemoryRouter } from "react-router-dom";

jest.mock("hooks/api/useRecipes");

describe("<Recipes />", () => {
  it("renders list of recipes", () => {
    useRecipes.mockImplementationOnce(() => ({
      recipes: [
        {
          id: "id",
          name: "recipe-name",
          description: "recipe-description",
        },
      ],
    }));

    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    expect(screen.getByText("recipe-name")).toBeVisible();
    expect(screen.getByText("recipe-description")).toBeVisible();
  });

  it("renders loading indicator", () => {
    useRecipes.mockImplementationOnce(() => ({
      loading: true,
    }));

    render(<Recipes />);

    expect(screen.getByText(/Loading list of recipes/)).toBeVisible();
  });

  it("renders error message", () => {
    useRecipes.mockImplementationOnce(() => ({
      error: "error",
    }));

    render(<Recipes />);

    expect(
      screen.getByText(/Something went wrong while loading recipes/)
    ).toBeVisible();
  });
});
