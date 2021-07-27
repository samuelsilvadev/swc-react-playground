import React from "react";
import { styled, global } from "@stitches/react";

import Recipes from "components/Recipes";

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

const Main = styled("main", {
  display: "flex",
  height: "100vh",
});

const RecipesStyled = styled(Recipes, {
  flexBasis: "100%",
  maxHeight: "50%",
  overflow: "auto",

  "@media (min-width: 768px)": {
    flexBasis: "50%",
    maxHeight: "100%",
  },
});

function App() {
  createGlobalStyles();

  return (
    <Main>
      <RecipesStyled />
      <section />
    </Main>
  );
}

export default App;
