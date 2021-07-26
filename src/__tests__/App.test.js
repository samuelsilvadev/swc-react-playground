import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("renders the component correctly", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toBeVisible();
  });
});
