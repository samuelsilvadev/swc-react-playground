import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Search from "../Search";

describe("<Search />", () => {
  it("renders search elements", () => {
    render(<Search />);

    expect(screen.getByLabelText("Search for a recipe")).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible();
  });

  it("searches correctly", () => {
    const onSearch = jest.fn();

    render(<Search onSearch={onSearch} />);

    const input = screen.getByLabelText("Search for a recipe");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "searching for something" } });
    fireEvent.submit(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("searching for something");
  });
});
