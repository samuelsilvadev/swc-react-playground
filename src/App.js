import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { styled, global } from "@stitches/react";

import Recipes from "components/Recipes";
import Recipe from "components/Recipe";

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
  flexDirection: "column",

  "@media (min-width: 768px)": {
    flexDirection: "row",
  },
});

const RecipesStyled = styled(Recipes, {
  flex: "0 0 100%",
  maxHeight: "50%",
  overflow: "auto",

  "@media (min-width: 768px)": {
    flexBasis: "50%",
    maxHeight: "100%",
  },
});

const RecipeStyled = styled(Recipe, {
  flex: "0 0 100%",

  "@media (min-width: 768px)": {
    flexBasis: "50%",
  },
});

function App() {
  createGlobalStyles();

  return (
    <BrowserRouter>
      <Main>
        <Route path="/">
          <RecipesStyled />
        </Route>
        <Route path="/:id">
          <RecipeStyled />
        </Route>
      </Main>
    </BrowserRouter>
  );
}

export default App;
