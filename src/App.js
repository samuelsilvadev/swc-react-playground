import React from "react";
import { styled, global } from "@stitches/react";

const H1 = styled("h1", {
  color: "red",
});

const createGlobalStyles = global({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontSize: "62.5%",
  },
  body: {
    fontSize: "1.6rem",
  },
});

function App() {
  createGlobalStyles();

  return <H1>App 1</H1>;
}

export default App;
