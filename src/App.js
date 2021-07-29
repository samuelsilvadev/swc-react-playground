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
  flexDirection: "column",
  padding: "2rem 5rem",
  gap: "5rem",

  "@media (min-width: 768px)": {
    alignItems: "flex-start",
    padding: "2rem 3rem",
    flexDirection: "row",
    gap: "3rem",
  },

  "@media (min-width: 1024px)": {
    padding: "2rem 5rem",
    gap: "5rem",
  },
});

const RecipesStyled = styled(Recipes, {
  flex: "0 1 auto",
  overflow: "auto",
  height: "calc(50vh - 2rem - 2.5rem)",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (min-width: 768px)": {
    flexBasis: "50%",
    height: "auto",
  },
});

const RecipeStyled = styled(Recipe, {
  flex: "0 1 auto",
  height: "calc(50vh - 2rem - 2.5rem)",
  overflow: "auto",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (min-width: 768px)": {
    position: "sticky",
    top: "2rem",
    flexBasis: "50%",
    height: "calc(100vh - 4rem)",
    overscrollBehavior: "contain",
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
