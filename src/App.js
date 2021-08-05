import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { styled, global } from "@stitches/react";

import Recipes from "components/Recipes";
import Recipe from "components/Recipe";
import useIsMobile from "hooks/useIsMobile";

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

  "@media (min-width: 768px)": {
    alignItems: "flex-start",
    padding: "2rem 3rem",
    flexDirection: "row",
  },

  "@media (min-width: 1024px)": {
    padding: "2rem 5rem",
  },
});

const RecipesStyled = styled(Recipes, {
  flex: "0 1 auto",
  height: "auto",
  scrollbarWidth: "none",

  "@media (min-width: 768px)": {
    flexBasis: "calc(50% - 1.5rem)",
    marginRight: "1.5rem",
  },
});

const RecipeStyled = styled(Recipe, {
  flex: "0 1 auto",
  height: "calc(100vh - 2rem - 2.5rem)",
  overflow: "auto",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (min-width: 768px)": {
    position: "sticky",
    top: "2rem",
    flexBasis: "calc(50% - 0.2rem - 1.5rem)",
    height: "calc(100vh - 4rem)",
    overscrollBehavior: "contain",
    marginLeft: "1.5rem",
  },
});

function App() {
  createGlobalStyles();

  const isMobile = useIsMobile();
  const RoutesWrapper = isMobile ? Switch : Fragment;

  return (
    <BrowserRouter>
      <Main>
        <RoutesWrapper>
          <Route exact={isMobile} path="/">
            <RecipesStyled />
          </Route>
          <Route exact={isMobile} path="/:id">
            <RecipeStyled />
          </Route>
        </RoutesWrapper>
      </Main>
    </BrowserRouter>
  );
}

export default App;
