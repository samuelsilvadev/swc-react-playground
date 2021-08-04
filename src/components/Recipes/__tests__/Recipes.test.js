import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import useRecipes from "hooks/api/useRecipes";

import Recipes from "../Recipes";

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
    expect(screen.queryByText("No results found")).not.toBeInTheDocument();
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

  it("searches for a recipe correctly", () => {
    useRecipes.mockImplementation(() => ({
      recipes: [
        {
          id: "id",
          name: "recipe-name",
          description: "recipe-description",
        },
        {
          id: "id-2",
          name: "frozen",
          description: "frozen-recipe-description",
        },
      ],
    }));

    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("Search for a recipe");
    const button = screen.getByRole("button");

    expect(screen.getByText("recipe-name")).toBeVisible();
    expect(screen.getByText("frozen")).toBeVisible();

    fireEvent.change(input, { target: { value: "froz" } });
    fireEvent.submit(button);

    expect(screen.queryByText("recipe-name")).not.toBeInTheDocument();
    expect(screen.getByText("frozen")).toBeVisible();
  });

  it("finds result if search term is uppercase", () => {
    useRecipes.mockImplementation(() => ({
      recipes: [
        {
          id: "id",
          name: "recipe-name",
          description: "recipe-description",
        },
        {
          id: "id-2",
          name: "frozen",
          description: "frozen-recipe-description",
        },
      ],
    }));

    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("Search for a recipe");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "FROZE" } });
    fireEvent.submit(button);

    expect(screen.queryByText("recipe-name")).not.toBeInTheDocument();
    expect(screen.getByText("frozen")).toBeVisible();
  });

  it("shows all recipes if input search is empty", () => {
    useRecipes.mockImplementation(() => ({
      recipes: [
        {
          id: "id",
          name: "recipe-name",
          description: "recipe-description",
        },
        {
          id: "id-2",
          name: "frozen",
          description: "frozen-recipe-description",
        },
      ],
    }));

    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("Search for a recipe");
    const button = screen.getByRole("button");

    expect(screen.getByText("recipe-name")).toBeVisible();
    expect(screen.getByText("frozen")).toBeVisible();

    fireEvent.change(input, { target: { value: "froz" } });
    fireEvent.submit(button);

    expect(screen.queryByText("recipe-name")).not.toBeInTheDocument();
    expect(screen.getByText("frozen")).toBeVisible();

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(button);

    expect(screen.getByText("recipe-name")).toBeVisible();
    expect(screen.getByText("frozen")).toBeVisible();
  });

  it("renders empty message if search result is empty", () => {
    useRecipes.mockImplementation(() => ({
      recipes: [
        {
          id: "id",
          name: "recipe-name",
          description: "recipe-description",
        },
        {
          id: "id-2",
          name: "frozen",
          description: "frozen-recipe-description",
        },
      ],
    }));

    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("Search for a recipe");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.submit(button);

    expect(screen.queryByText("recipe-name")).not.toBeInTheDocument();
    expect(screen.queryByText("frozen")).not.toBeInTheDocument();
    expect(screen.getByText("No results found")).toBeVisible();
  });
});
