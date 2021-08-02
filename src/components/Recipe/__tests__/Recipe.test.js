import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import useRecipe from "hooks/api/useRecipe";

import Recipe from "../Recipe";

jest.mock("hooks/api/useRecipe");

describe("<Recipe />", () => {
  it("renders a recipe", () => {
    useRecipe.mockImplementationOnce(() => ({
      recipe: {
        name: "recipe-name",
        description: "recipe-description",
        total_time_tier: {
          display_tier: "1 hour",
        },
        yields: "Servings: 18",
        sections: [
          {
            name: "ingredients-section",
            components: [
              {
                id: 1,
                ingredient: {
                  name: "ingredient-name",
                },
                measurements: [
                  {
                    quantity: "1",
                    unit: {
                      name: "unit-name",
                    },
                  },
                ],
              },
            ],
          },
        ],
        instructions: [
          {
            display_text: "instruction-display-text",
            id: 1,
          },
        ],
      },
    }));

    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    );

    expect(screen.getByRole("article")).not.toBeNull();
    expect(screen.getByAltText("recipe-name")).toBeVisible();
    expect(screen.getByRole("heading", { level: 2 })).toBeVisible();
    expect(screen.getByText("recipe-description")).toBeVisible();
    expect(screen.getByText("Preparation time: 1 hour")).toBeVisible();
    expect(screen.getByText("Servings: 18")).toBeVisible();

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
    expect(screen.getByText("ingredients-section")).toBeVisible();
    expect(screen.getByText("instruction-display-text")).toBeVisible();
  });

  it("renders in loading state", () => {
    useRecipe.mockImplementationOnce(() => ({
      loading: true,
    }));

    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading recipe details...")).toBeVisible();
  });

  it("renders in error state", () => {
    useRecipe.mockImplementationOnce(() => ({
      error: true,
    }));

    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Something went wrong while loading the recipe details")
    ).toBeVisible();
  });

  it("renders nothing is recipe is `null`", () => {
    useRecipe.mockImplementationOnce(() => ({
      recipe: null,
    }));

    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    );

    expect(screen.queryByRole("article")).toBeNull();
  });
});
